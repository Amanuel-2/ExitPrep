import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const questions = [
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function inside another function",
      "A loop",
      "A variable",
      "A CSS property",
    ],
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    options: ["push", "pop", "shift", "unshift"],
  },
  {
    question: "What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyperlink Transfer Protocol", "HyperText Transmission Protocol"],
  },
];

export default function FullExam() {
  const [index, setIndex] = useState(0);
  const total = questions.length;

  const progressPercent = Math.round(((index + 1) / total) * 100);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold">Exam Mode</h2>
            <p className="text-zinc-400 text-sm">Timed practice (UI demo only)</p>
          </div>

          <div className="text-right">
            <div className="text-sm text-zinc-400">Time left</div>
            <div className="text-lg font-medium">10:00</div>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-between text-sm text-zinc-400 mb-1">
            <div>Question {index + 1} of {total}</div>
            <div>{progressPercent}%</div>
          </div>
          <div className="w-full h-2 bg-zinc-700 rounded overflow-hidden">
            <div className="h-full bg-indigo-600" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <Card title={`Q${index + 1}`} description=""> 
          <div>
            <div className="text-lg font-medium mb-4">{questions[index].question}</div>

            <form>
              <div className="space-y-3">
                {questions[index].options.map((opt, i) => (
                  <label key={i} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-md p-3 cursor-pointer hover:bg-zinc-800">
                    <input type="radio" name={`q-${index}`} className="accent-indigo-600" />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </form>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-zinc-400">Tip: select the best answer</div>
              <div className="flex gap-3">
                {index < total - 1 ? (
                  <Button onClick={() => setIndex((s) => Math.min(s + 1, total - 1))}>Next Question</Button>
                ) : (
                  <Button variant="primary" onClick={() => alert("Submit (demo)")}>Submit Exam</Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
