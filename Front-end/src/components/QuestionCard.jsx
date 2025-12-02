export default function QuestionCard({ question, onNext }) {
  if (!question) return null;

  const text = question.text || question.prompt || '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <p className="font-medium text-gray-900 dark:text-gray-100">{text}</p>
      </div>

      <ul className="mt-2 space-y-3">
        {question.options?.map((opt, i) => (
          <li key={i} className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 rounded-md p-3">
            <input type="radio" name={`q-${question.id}`} className="accent-indigo-600" />
            <span className="text-sm text-gray-800 dark:text-gray-200">{opt}</span>
          </li>
        ))}
      </ul>

      {onNext ? (
        <div className="mt-6 flex justify-end">
          <button onClick={onNext} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Next</button>
        </div>
      ) : null}
    </div>
  );
}
