import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function CourseList() {
  const navigate = useNavigate();

  const courses = Array.from({ length: 16 }).map((_, i) => {
    const id = i + 1;
    const gradients = [
      'from-blue-600 to-cyan-600',
      'from-purple-600 to-pink-600',
      'from-green-600 to-emerald-600',
      'from-orange-600 to-red-600',
    ];
    return {
      id: String(id),
      title: `Computer Science ${id}`,
      desc: `Core topics and practice questions for Computer Science ${id}`,
      gradient: gradients[i % gradients.length],
      progress: Math.floor(Math.random() * 100),
    };
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Study Mode</h1>
        <p className="text-gray-400">Select a course to view questions and the AI chat assistant</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {courses.map((c, index) => (
          <Card
            key={c.id}
            hover
            className="p-5 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => navigate(`/study/${c.id}`)}
          >
            <div className="flex flex-col gap-4">
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">{c.desc}</p>
              </div>

              {/* Progress bar */}
              <div className="mt-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Progress</span>
                  <span className="text-xs text-gray-400">{c.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${c.gradient} rounded-full transition-all duration-700`}
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
