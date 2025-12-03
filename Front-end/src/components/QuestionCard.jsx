import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function QuestionCard({ question, onNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  // Reset local answer state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setAnswered(false);
  }, [question?.id]);

  if (!question) return null;

  const text = question.text || question.prompt || '';

  return (
    <div className="glass-card rounded-2xl p-6 shadow-2xl border border-white/10 animate-fade-in">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-4">
          <span className="text-sm font-semibold text-blue-400">Question</span>
        </div>
        <p className="text-lg font-medium text-white leading-relaxed">{text}</p>
      </div>

      <div className="space-y-3 mb-6">
        {question.options?.map((opt, i) => {
          const isSelected = selectedAnswer === i;
          const optionLabel = String.fromCharCode(65 + i);
          const correctIndex = question.correctAnswer;
          const showCorrect = answered && i === correctIndex;
          const showIncorrect = answered && isSelected && i !== correctIndex;

          return (
            <button
              key={i}
              onClick={() => {
                if (answered) return; // prevent changing after answer
                setSelectedAnswer(i);
                setAnswered(true);
              }}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                showCorrect
                  ? 'glass-card border-green-500/50 shadow-lg bg-green-600/5 neon-glow-green'
                  : showIncorrect
                  ? 'glass-card-light border-red-500/50 bg-red-600/5 text-red-300'
                  : isSelected && !answered
                  ? 'glass-card border-blue-500/50 shadow-lg neon-glow-blue'
                  : 'glass-card-light border-zinc-700/30 hover:border-zinc-600 hover:bg-white/5'
              }`}
              disabled={answered}
            >
              {/* Radio button */}
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  showCorrect
                    ? 'border-green-500 bg-green-500 text-white'
                    : showIncorrect
                    ? 'border-red-500 bg-red-500 text-white'
                    : isSelected && !answered
                    ? 'border-blue-500 bg-gradient-to-br from-blue-600 to-purple-600'
                    : 'border-gray-600 group-hover:border-gray-500'
                }`}
              >
                {(isSelected || showCorrect) && <Check className="w-4 h-4 text-white" />}
              </div>

              {/* Option label */}
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold flex-shrink-0 transition-all duration-300 ${
                  showCorrect
                    ? 'bg-green-500 text-white'
                    : showIncorrect
                    ? 'bg-red-500 text-white'
                    : isSelected && !answered
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                    : 'bg-zinc-800 text-gray-400 group-hover:bg-zinc-700'
                }`}
              >
                {optionLabel}
              </div>

              {/* Option text */}
              <span className={`text-sm flex-1 transition-colors duration-300 ${
                showCorrect
                  ? 'text-white font-medium'
                  : showIncorrect
                  ? 'text-white font-medium'
                  : isSelected && !answered
                  ? 'text-white font-medium'
                  : 'text-gray-300 group-hover:text-white'
              }`}>
                {opt}
              </span>
            </button>
          );
        })}
      </div>
      {answered && question.explanation && (
        <div className={`p-4 rounded-lg mt-4 ${selectedAnswer === question.correctAnswer ? 'bg-green-500/5 border border-green-500/20 text-green-200' : 'bg-red-600/5 border border-red-600/20 text-red-200'}`}>
          <div className="font-semibold mb-1">Explanation</div>
          <div className="text-sm">{question.explanation}</div>
        </div>
      )}

      {onNext && (
        <div className="flex justify-end mt-4">
          <button
            onClick={onNext}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50"
            disabled={selectedAnswer === null}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}