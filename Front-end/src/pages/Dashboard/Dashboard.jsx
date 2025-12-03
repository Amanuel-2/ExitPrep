import Card from '../../components/ui/Card';
import ProgressBar from '../../components/ui/ProgressBar';
import Button from '../../components/ui/Button';
import StatsChart from '../../components/ui/StatsChart';
import { CheckCircle, Clock, Target, Flame, TrendingUp, BookOpen, FileText, BarChart3 } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Questions Completed', value: '247', icon: CheckCircle, gradient: 'from-green-600 to-emerald-600', color: 'green' },
    { label: 'Study Hours', value: '42.5', icon: Clock, gradient: 'from-blue-600 to-cyan-600', color: 'blue' },
    { label: 'Exam Readiness', value: '78%', icon: Target, gradient: 'from-purple-600 to-pink-600', color: 'purple' },
    { label: 'Current Streak', value: '12 days', icon: Flame, gradient: 'from-orange-600 to-red-600', color: 'cyan' },
  ];

  const recentActivity = [
    { course: 'Data Structures', questions: 15, date: '2 hours ago' },
    { course: 'Algorithms', questions: 20, date: '1 day ago' },
    { course: 'Operating Systems', questions: 10, date: '2 days ago' },
    { course: 'Database Systems', questions: 18, date: '3 days ago' },
  ];

  const courseProgress = [
    { name: 'Data Structures', progress: 85, completed: 85, total: 100 },
    { name: 'Algorithms', progress: 72, completed: 72, total: 100 },
    { name: 'Operating Systems', progress: 60, completed: 60, total: 100 },
    { name: 'Database Systems', progress: 45, completed: 45, total: 100 },
    { name: 'Computer Networks', progress: 30, completed: 30, total: 100 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white mb-1">Dashboard</h1>
        <p className="text-sm text-zinc-400">Welcome back! Here's your progress overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} hover className="p-5 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <ProgressBar value={Math.floor(Math.random() * 80) + 20} color={stat.color} size="sm" showPercentage={false} />
            </Card>
          );
        })}
      </div>

      {/* Chart + Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Weekly Activity
                </h3>
                <p className="text-sm text-gray-400 mt-1">Questions attempted over the last 7 days</p>
              </div>
              <div className="px-3 py-1 rounded-lg glass-card-light border border-zinc-700/50 text-sm text-gray-400">
                Last 7 days
              </div>
            </div>
            <StatsChart />
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-4">
          <Card className="p-5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              Status
            </h3>
            <div className="space-y-4">
              <div className="p-3 rounded-xl glass-card-light border border-zinc-700/30">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-400">Exam Readiness</p>
                  <p className="text-lg font-bold text-white">78%</p>
                </div>
                <ProgressBar value={78} color="purple" size="sm" showPercentage={false} />
              </div>

              <div className="p-3 rounded-xl glass-card-light border border-zinc-700/30">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Completed Courses</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">3</p>
                </div>
              </div>

              <div className="p-3 rounded-xl glass-card-light border border-zinc-700/30">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Current Streak</p>
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">12 days</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/30">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Next Exam
            </h3>
            <p className="text-sm text-gray-300 mb-4">Practice a 10-question timed mock exam to assess readiness.</p>
            <Button onClick={() => window.location.assign('/exam')} className="w-full">
              Start Mock Exam
            </Button>
          </Card>
        </div>
      </div>

      {/* Study Progress and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Study Progress */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            Study Progress
          </h2>
          <div className="space-y-4">
            {courseProgress.map((course, index) => (
              <div key={index} className="p-3 rounded-xl glass-card-light border border-zinc-700/30 hover:border-zinc-600 transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-white">{course.name}</span>
                  <span className="text-sm text-gray-400">{course.completed}/{course.total}</span>
                </div>
                <ProgressBar value={course.progress} color="cyan" size="sm" showPercentage={false} />
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-400" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-3 rounded-xl glass-card-light border border-zinc-700/30 hover:border-zinc-600 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-white group-hover:text-blue-400 transition-colors">{activity.course}</p>
                    <p className="text-sm text-gray-400 mt-1">{activity.questions} questions completed</p>
                  </div>
                  <span className="text-xs text-gray-500 px-2 py-1 rounded-lg bg-zinc-800/50">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-white mb-5">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: BookOpen, title: 'Continue Studying', desc: 'Resume where you left off', gradient: 'from-blue-600 to-cyan-600' },
            { icon: FileText, title: 'Take Practice Exam', desc: 'Test your knowledge', gradient: 'from-purple-600 to-pink-600' },
            { icon: BarChart3, title: 'View Analytics', desc: 'Track your performance', gradient: 'from-green-600 to-emerald-600' },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <button 
                key={index} 
                className="p-5 glass-card-light rounded-xl hover:scale-[1.02] transition-all duration-300 text-left group border border-zinc-700/30 hover:border-zinc-600"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{action.title}</h3>
                <p className="text-sm text-gray-400">{action.desc}</p>
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
