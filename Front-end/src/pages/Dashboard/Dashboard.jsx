import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function Dashboard() {
  const cards = [
    {
      id: "mock-interview",
      title: "Mock Interview",
      description: "Start a timed AI interview",
      icon: "🎤",
      cta: "Start",
    },
    {
      id: "skill-gap",
      title: "Skill Gap Test",
      description: "Quick skill diagnostic",
      icon: "🧭",
      cta: "Start",
    },
    {
      id: "resume",
      title: "Resume Analyzer",
      description: "Upload a resume (dummy)",
      icon: "📄",
      cta: "Upload",
    },
    {
      id: "exam-mode",
      title: "Exam Mode",
      description: "Take a timed 10-question exam",
      icon: "⏱️",
      cta: "Take Exam",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <p className="text-zinc-400 mt-1">Demo features to explore the frontend UI.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <Card key={c.id} title={c.title} description={c.description} icon={c.icon}>
            <div className="flex items-center justify-between">
              {c.id === "resume" ? (
                <Button variant="neutral">{c.cta}</Button>
              ) : c.id === "exam-mode" ? (
                <Link to="/exam">
                  <Button>{c.cta}</Button>
                </Link>
              ) : (
                <Button>{c.cta}</Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
