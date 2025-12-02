import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function CourseList() {
  const navigate = useNavigate();

  const courses = Array.from({ length: 16 }).map((_, i) => {
    const id = i + 1;
    return {
      id: String(id),
      title: `Computer Science ${id}`,
      desc: `Core topics and practice questions for Computer Science ${id}`,
      icon: '💻',
    };
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Study Mode</h1>
        <p className="text-zinc-400">Select a course to view questions and the AI chat (UI-only).</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {courses.map((c) => (
          <Card
            key={c.id}
            hover
            className="p-5 cursor-pointer text-white"
            onClick={() => navigate(`/study/${c.id}`)}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center text-2xl">{c.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-zinc-400 mt-1">{c.desc}</p>
              </div>
            </div>

          </Card>
        ))}
      </div>
    </div>
  );
}
