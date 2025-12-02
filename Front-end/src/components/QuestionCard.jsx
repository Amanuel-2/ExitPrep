export default function QuestionCard({ question }) {
  return (
    <div className="border rounded p-3 bg-white">
      <p className="font-medium">{question.prompt}</p>
      <ul className="mt-2 space-y-1">
        {question.options?.map((opt, i) => (
          <li key={i} className="flex items-center gap-2">
            <input type="radio" name={`q-${question.id}`} />
            <span>{opt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
