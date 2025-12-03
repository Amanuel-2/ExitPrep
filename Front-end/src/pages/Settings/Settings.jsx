import { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useTheme } from '../../context/ThemeContext';
import { User, Mail, Building2, Hash, Bell, BookOpen, Target, Trash2, RotateCcw, Moon, Sun } from 'lucide-react';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    university: 'Tech University',
    studentId: 'STU-2024-001',
  });
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    studyReminders: true,
    examAlerts: true,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSave = () => {
    alert('Settings saved successfully! (Demo only)');
  };

  return (
    <div className="space-y-6 max-w-4xl animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      {/* Theme Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          {theme === 'dark' ? <Moon className="w-5 h-5 text-blue-400" /> : <Sun className="w-5 h-5 text-yellow-400" />}
          Appearance
        </h2>
        <div className="flex items-center justify-between p-4 glass-card-light rounded-xl border border-zinc-700/30">
          <div>
            <p className="font-medium text-white">Theme Mode</p>
            <p className="text-sm text-gray-400 mt-1">
              Choose between light and dark mode
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
              theme === 'dark' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 flex items-center justify-center ${
                theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
              }`}
            >
              {theme === 'dark' ? (
                <Moon className="w-3 h-3 text-blue-600" />
              ) : (
                <Sun className="w-3 h-3 text-yellow-600" />
              )}
            </div>
          </button>
        </div>
      </Card>

      {/* Account Information */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <User className="w-5 h-5 text-cyan-400" />
          Account Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              icon={<User className="w-5 h-5" />}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              icon={<Mail className="w-5 h-5" />}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                University
              </label>
              <Input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                icon={<Building2 className="w-5 h-5" />}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Student ID
              </label>
              <Input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                icon={<Hash className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Bell className="w-5 h-5 text-purple-400" />
          Notifications
        </h2>
        <div className="space-y-3">
          {[
            { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
            { key: 'push', label: 'Push Notifications', desc: 'Receive browser notifications' },
            { key: 'studyReminders', label: 'Study Reminders', desc: 'Daily reminders to study' },
            { key: 'examAlerts', label: 'Exam Alerts', desc: 'Notifications about upcoming exams' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 glass-card-light rounded-xl border border-zinc-700/30">
              <div>
                <p className="font-medium text-white">{item.label}</p>
                <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
              </div>
              <button
                onClick={() => handleNotificationChange(item.key)}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  notifications[item.key] ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-zinc-700'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    notifications[item.key] ? 'translate-x-8' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Study Preferences */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-green-400" />
          Study Preferences
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Daily Study Goal (minutes)
            </label>
            <Input
              type="number"
              defaultValue={60}
              icon={<Target className="w-5 h-5" />}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Questions per Session
            </label>
            <select className="w-full px-4 py-3 glass-card-light border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 appearance-none cursor-pointer">
              <option className="bg-zinc-900">10 questions</option>
              <option className="bg-zinc-900">20 questions</option>
              <option className="bg-zinc-900">30 questions</option>
              <option className="bg-zinc-900">50 questions</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Difficulty Level
            </label>
            <select className="w-full px-4 py-3 glass-card-light border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 appearance-none cursor-pointer">
              <option className="bg-zinc-900">Beginner</option>
              <option className="bg-zinc-900">Intermediate</option>
              <option className="bg-zinc-900">Advanced</option>
              <option className="bg-zinc-900">Mixed</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-red-500/30">
        <h2 className="text-xl font-bold text-red-400 mb-6">Danger Zone</h2>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 glass-card-light rounded-xl border border-red-500/20 bg-red-500/5">
            <div>
              <p className="font-medium text-white flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Reset Progress
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Clear all your study progress and start fresh
              </p>
            </div>
            <Button variant="danger" size="sm" className="self-start sm:self-auto">
              Reset
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 glass-card-light rounded-xl border border-red-500/20 bg-red-500/5">
            <div>
              <p className="font-medium text-white flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                Delete Account
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="danger" size="sm" className="self-start sm:self-auto">
              Delete
            </Button>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button variant="secondary">Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
}