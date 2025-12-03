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

  const [assistantReply, setAssistantReply] = useState(null);
  const [assistantExpanded, setAssistantExpanded] = useState(false);
  const [mobileChatVisible, setMobileChatVisible] = useState(true);

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

          {/* Assistant reply box (appears after a query) */}
          {assistantReply && (
            <div className="mt-6">
              <div className={`rounded-xl border border-white/10 text-gray-200 transition-all duration-300 ${assistantExpanded ? 'glass-card-light p-6 max-h-64 overflow-y-auto' : 'glass-card-light p-4'}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7 3 3.5 6.5 3.5 11C3.5 13.2 4.4 15.2 6 16.6V21L10.6 18.5C11.9 18.9 13.4 19.1 15 19.1C20 19.1 23.5 15.6 23.5 10.6C23.5 5.6 19 3 12 3Z" stroke="none" fill="white"/></svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 font-semibold mb-1">AI Assistant</div>
                      <div className={`text-sm ${assistantExpanded ? 'text-gray-100' : 'text-gray-200'}`}>{assistantReply}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!assistantExpanded && (
                      <button
                        onClick={() => setAssistantExpanded(true)}
                        className="text-xs text-blue-400 hover:underline"
                      >
                        Expand
                      </button>
                    )}
                    {assistantExpanded && (
                      <button
                        onClick={() => setAssistantExpanded(false)}
                        className="text-xs text-gray-400 hover:underline"
                      >
                        Collapse
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chat box for small screens: render below the question so it does not cover content */}
          <div className="mt-6 lg:hidden">
            <ChatBox questionText={currentQuestion.text} compact onAssistantResponse={(text) => { setAssistantReply(text); setAssistantExpanded(true); }} />
          </div>
        </div>

        {/* Right column: show chat beside the question without covering it */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-24 w-full max-w-[520px]">
            <ChatBox questionText={currentQuestion.text} compact onAssistantResponse={(text) => { setAssistantReply(text); setAssistantExpanded(true); }} />
          </div>
        </div>
      </div>
    </div>
  );
}
