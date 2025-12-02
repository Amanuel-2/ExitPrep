import Card from '../../components/ui/Card';
import ProgressBar from '../../components/ui/ProgressBar';
import Button from '../../components/ui/Button';
import StatsChart from '../../components/ui/StatsChart';

export default function Dashboard() {
  const stats = [
    { label: 'Questions Completed', value: '247', color: 'bg-green-500' },
    { label: 'Study Hours', value: '42.5', color: 'bg-blue-500' },
    { label: 'Exam Readiness', value: '78%', color: 'bg-indigo-500' },
    { label: 'Current Streak', value: '12 days', color: 'bg-orange-500' },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition transform hover:scale-[1.01]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-300 mb-1">{stat.label}</p>
                <p className="text-2xl font-medium text-white">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${stat.color} bg-opacity-90 shadow-md`} />
            </div>
            <div className="mt-4">
              <ProgressBar value={Math.floor(Math.random() * 80) + 10} />
            </div>
          </Card>
        ))}
      </div>

      {/* Chart + Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Weekly Activity</h3>
                <p className="text-sm text-zinc-400">Questions attempted over the last 7 days</p>
              </div>
              <div className="text-sm text-zinc-400">Last 7 days</div>
            </div>

            <div className="mt-4">
              <StatsChart />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-4">
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-white">Status</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Exam Readiness</p>
                  <p className="text-lg font-medium text-white">78%</p>
                </div>
                <div className="w-24">
                  <ProgressBar value={78} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Completed Courses</p>
                  <p className="text-lg font-medium text-white">3</p>
                </div>
                <div className="text-sm text-zinc-400">Good</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Current Streak</p>
                  <p className="text-lg font-medium text-white">12 days</p>
                </div>
                <div className="text-sm text-zinc-400">🔥</div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="text-lg font-semibold text-white">Next Exam</h3>
            <p className="text-sm text-zinc-400 mt-2">Practice a 10-question timed mock exam to assess readiness.</p>
            <div className="mt-4">
              <Button onClick={() => window.location.assign('/exam')}>Start Mock Exam</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Study Progress and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Study Progress */}
        <Card className="p-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Study Progress</h2>
          <div className="space-y-5">
            {courseProgress.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{course.name}</span>
                  <span className="text-sm text-zinc-400">{course.completed}/{course.total}</span>
                </div>
                <ProgressBar value={course.progress} />
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="divide-y divide-zinc-800">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-white">{activity.course}</p>
                  <p className="text-sm text-zinc-400">{activity.questions} questions completed</p>
                </div>
                <span className="text-xs text-zinc-400">{activity.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-4">
        <h2 className="text-2xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '📚', title: 'Continue Studying', desc: 'Resume where you left off' },
            { icon: '📝', title: 'Take Practice Exam', desc: 'Test your knowledge' },
            { icon: '📊', title: 'View Analytics', desc: 'Track your performance' },
          ].map((action, index) => (
            <button key={index} className="p-4 bg-zinc-900 rounded-xl hover:scale-[1.01] transition shadow-sm text-left">
              <div className="text-2xl mb-2">{action.icon}</div>
              <h3 className="font-medium text-white">{action.title}</h3>
              <p className="text-sm text-zinc-400">{action.desc}</p>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
