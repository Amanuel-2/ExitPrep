import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard';
import ChatBox from '../../components/ChatBox';
import Button from '../../components/ui/Button';
import { questionsByTopic } from '../../data/questions';
import { ArrowLeft } from 'lucide-react';

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
      <div className="text-center py-12 animate-fade-in">
        <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
          <p className="text-gray-400 mb-4">No questions available for this course.</p>
          <Button onClick={() => navigate('/study')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {courseNames[courseId]}
          </h1>
          <p className="text-gray-400">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
        <Button variant="ghost" onClick={() => navigate('/study')} className="self-start sm:self-auto">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-zinc-800/50 rounded-full overflow-hidden border border-zinc-700/30">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500 shadow-lg"
          style={{ 
            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
        ></div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Question Section */}
        <div className="lg:col-span-2">
          <QuestionCard question={currentQuestion} onNext={handleNext} />
        </div>

        {/* Chat Box Section */}
        <div className="lg:col-span-1 h-[500px] lg:h-[600px]">
          <ChatBox questionText={currentQuestion.text} />
        </div>
      </div>
    </div>
  );
}
