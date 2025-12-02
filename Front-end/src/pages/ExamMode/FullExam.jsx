import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { generateExamQuestions } from '../../data/questions';

export default function FullExam() {
  const navigate = useNavigate();
  const [examStarted, setExamStarted] = useState(false);
  const [questions] = useState(() => generateExamQuestions(20));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
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
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Exit Exam Practice
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This exam contains {questions.length} questions covering all computer science topics.
              You have 60 minutes to complete it.
            </p>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Instructions:</h3>
              <ul className="text-sm text-yellow-800 dark:text-yellow-200 text-left space-y-1">
                <li>• Answer all questions to the best of your ability</li>
                <li>• You can navigate between questions using the navigation buttons</li>
                <li>• Your progress is saved automatically</li>
                <li>• The exam will auto-submit when time runs out</li>
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
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {score.percentage >= 70 ? '🎉' : '📚'}
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Exam Completed!
            </h1>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {score.percentage.toFixed(1)}%
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">Correct</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {score.correct}
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">Incorrect</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {score.total - score.correct}
                </p>
              </div>
            </div>

            <div className={`p-4 rounded-xl mb-6 ${
              score.percentage >= 70
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                : 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800'
            }`}>
              <p className={`font-semibold ${
                score.percentage >= 70
                  ? 'text-green-900 dark:text-green-300'
                  : 'text-orange-900 dark:text-orange-300'
              }`}>
                {score.percentage >= 70
                  ? '✓ Great job! You passed the exam.'
                  : '⚠ Keep studying to improve your score.'}
              </p>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => navigate('/')} variant="secondary" className="flex-1">
                Back to Dashboard
              </Button>
              <Button onClick={() => window.location.reload()} className="flex-1">
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
    <div className="space-y-6">
      {/* Timer and Progress */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Time Remaining</p>
              <p className={`text-2xl font-bold ${
                timeLeft < 300 ? 'text-red-600' : 'text-gray-800 dark:text-white'
              }`}>
                {formatTime(timeLeft)}
              </p>
            </div>
            <div className="h-12 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Progress</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
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
        <div className="mb-4">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-2">
            {currentQuestion.text}
          </h3>
        </div>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = answers[currentQuestion.id] === index;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="text-gray-800 dark:text-white">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            variant="secondary"
          >
            ← Previous
          </Button>
          
          <div className="flex gap-2 flex-wrap justify-center">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-8 h-8 rounded-full text-sm font-semibold transition-all duration-200 ${
                  index === currentQuestionIndex
                    ? 'bg-indigo-600 text-white'
                    : answers[questions[index].id] !== undefined
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
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
            Next →
          </Button>
        </div>
      </Card>
    </div>
  );
}
