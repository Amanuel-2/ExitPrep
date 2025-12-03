import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { generateExamQuestions } from '../../data/questions';
import { Clock, CheckCircle, XCircle, Award, Home, RotateCcw, FileText, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FullExam() {
  const navigate = useNavigate();
  const [examStarted, setExamStarted] = useState(false);
  const [questions] = useState(() => generateExamQuestions(20));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [examFinished, setExamFinished] = useState(false);

  useEffect(() => {
    if (!examStarted || examFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examFinished]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleFinishExam = () => {
    setExamFinished(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: (correct / questions.length) * 100 };
  };

  if (!examStarted) {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card className="p-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg neon-glow-blue">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Exit Exam Practice
            </h1>
            <p className="text-gray-400 mb-8">
              This exam contains {questions.length} questions covering all computer science topics.
              You have 60 minutes to complete it.
            </p>
            
            <div className="glass-card-light border border-yellow-500/30 rounded-xl p-6 mb-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold text-yellow-400">Instructions</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Answer all questions to the best of your ability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>You can navigate between questions using the navigation buttons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Your progress is saved automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>The exam will auto-submit when time runs out</span>
                </li>
              </ul>
            </div>

            <Button onClick={() => setExamStarted(true)} size="lg" className="w-full">
              Start Exam
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (examFinished) {
    const score = calculateScore();
    const passed = score.percentage >= 70;
    
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card className="p-8">
          <div className="text-center">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${
              passed ? 'from-green-600 to-emerald-600' : 'from-orange-600 to-red-600'
            } flex items-center justify-center shadow-lg ${
              passed ? 'neon-glow-blue' : ''
            }`}>
              {passed ? (
                <Award className="w-12 h-12 text-white" />
              ) : (
                <FileText className="w-12 h-12 text-white" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Exam Completed!
            </h1>
            <p className="text-gray-400 mb-8">
              {passed ? 'Congratulations on passing!' : 'Keep practicing to improve your score'}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass-card-light p-5 rounded-xl border border-blue-500/30">
                <p className="text-sm text-gray-400 mb-2">Score</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {score.percentage.toFixed(1)}%
                </p>
              </div>
              <div className="glass-card-light p-5 rounded-xl border border-green-500/30">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                  <p className="text-sm text-gray-400">Correct</p>
                </div>
                <p className="text-3xl font-bold text-green-400">
                  {score.correct}
                </p>
              </div>
              <div className="glass-card-light p-5 rounded-xl border border-red-500/30">
                <div className="flex items-center justify-center mb-2">
                  <XCircle className="w-4 h-4 text-red-400 mr-1" />
                  <p className="text-sm text-gray-400">Incorrect</p>
                </div>
                <p className="text-3xl font-bold text-red-400">
                  {score.total - score.correct}
                </p>
              </div>
            </div>

            <div className={`p-5 rounded-xl mb-8 border ${
              passed
                ? 'glass-card-light border-green-500/30 bg-green-500/5'
                : 'glass-card-light border-orange-500/30 bg-orange-500/5'
            }`}>
              <p className={`font-semibold flex items-center justify-center gap-2 ${
                passed ? 'text-green-400' : 'text-orange-400'
              }`}>
                {passed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Great job! You passed the exam.
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Keep studying to improve your score.
                  </>
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={() => navigate('/')} variant="secondary" className="flex-1">
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button onClick={() => window.location.reload()} className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Exam
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Timer and Progress */}
      <Card className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                timeLeft < 300 
                  ? 'bg-gradient-to-br from-red-600 to-pink-600' 
                  : 'bg-gradient-to-br from-blue-600 to-cyan-600'
              }`}>
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Time Remaining</p>
                <p className={`text-2xl font-bold ${
                  timeLeft < 300 ? 'text-red-400' : 'text-white'
                }`}>
                  {formatTime(timeLeft)}
                </p>
              </div>
            </div>
            <div className="h-12 w-px bg-zinc-700/50"></div>
            <div>
              <p className="text-sm text-gray-400">Progress</p>
              <p className="text-2xl font-bold text-white">
                {answeredCount}/{questions.length}
              </p>
            </div>
          </div>
          <Button onClick={handleFinishExam} variant="success">
            Finish Exam
          </Button>
        </div>
      </Card>

      {/* Question */}
      <Card className="p-6">
        <div className="mb-6">
          <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-4">
            <span className="text-sm font-semibold text-blue-400">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {currentQuestion.text}
          </h3>
        </div>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = answers[currentQuestion.id] === index;
            const optionLabel = String.fromCharCode(65 + index);

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 group ${
                  isSelected
                    ? 'glass-card border-blue-500/50 shadow-lg neon-glow-blue'
                    : 'glass-card-light border-zinc-700/30 hover:border-zinc-600 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold flex-shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                        : 'bg-zinc-800 text-gray-400 group-hover:bg-zinc-700'
                    }`}
                  >
                    {optionLabel}
                  </div>
                  <span className={`text-sm flex-1 transition-colors duration-300 ${
                    isSelected ? 'text-white font-medium' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            variant="secondary"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          
          <div className="flex gap-2 flex-wrap justify-center max-w-md">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  index === currentQuestionIndex
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg'
                    : answers[questions[index].id] !== undefined
                    ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white'
                    : 'glass-card-light text-gray-400 hover:bg-white/5 border border-zinc-700/30'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <Button
            onClick={() => setCurrentQuestionIndex(Math.min(questions.length - 1, currentQuestionIndex + 1))}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Card>
    </div>
  );
}