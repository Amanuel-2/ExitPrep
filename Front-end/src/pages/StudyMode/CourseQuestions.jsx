import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard';
import ChatBox from '../../components/ChatBox';
import Button from '../../components/ui/Button';
import { questionsByTopic } from '../../data/questions';

export default function CourseQuestions() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // support 16 demo courses by mapping courseId to one of the available topic buckets
  const cid = parseInt(courseId, 10) || 1;
  const topicId = ((cid - 1) % Object.keys(questionsByTopic).length) + 1;
  const questions = questionsByTopic[topicId] || [];
  const currentQuestion = questions[currentQuestionIndex];

  const courseNames = Array.from({ length: 16 }).reduce((acc, _, i) => {
    acc[i + 1] = `Computer Science ${i + 1}`;
    return acc;
  }, {});

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">No questions available for this course.</p>
        <Button onClick={() => navigate('/study')} className="mt-4">
          Back to Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {courseNames[courseId]}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
        <Button variant="secondary" onClick={() => navigate('/study')}>
          ← Back to Courses
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Question Section */}
        <div className="lg:col-span-2">
          <QuestionCard question={currentQuestion} onNext={handleNext} />
        </div>

        {/* Chat Box Section */}
        <div className="lg:col-span-1 h-[600px]">
          <ChatBox questionText={currentQuestion.text} />
        </div>
      </div>
    </div>
  );
}
