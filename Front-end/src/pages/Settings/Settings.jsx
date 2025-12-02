// import { useState } from 'react';
// import Card from '../../components/ui/Card';
// import Button from '../../components/ui/Button';
// import { useTheme } from '../../context/ThemeContext';

// export default function Settings() {
//   const { theme, toggleTheme } = useTheme();
//   const [formData, setFormData] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     university: 'Tech University',
//     studentId: 'STU-2024-001',
//   });
//   const [notifications, setNotifications] = useState({
//     email: true,
//     push: false,
//     studyReminders: true,
//     examAlerts: true,
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleNotificationChange = (key) => {
//     setNotifications({ ...notifications, [key]: !notifications[key] });
//   };

//   const handleSave = () => {
//     alert('Settings saved successfully! (Demo only)');
//   };

//   return (
//     <div className="space-y-6 max-w-4xl">
//       <div>
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Settings</h1>
//         <p className="text-gray-600 dark:text-gray-400">Manage your account and preferences</p>
//       </div>

//       {/* Theme Settings */}
//       <Card className="p-6">
//         <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Appearance</h2>
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="font-medium text-gray-800 dark:text-white">Theme</p>
//             <p className="text-sm text-gray-600 dark:text-gray-400">
//               Choose between light and dark mode
//             </p>
//           </div>
//           <button
//             onClick={toggleTheme}
//             className={`relative w-16 h-8 rounded-full transition-colors ${
//               theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-300'
//             }`}
//           >
//             <div
//               className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
//                 theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
//               }`}
//             ></div>
//           </button>
//         </div>
//       </Card>

//       {/* Account Information */}
//       <Card className="p-6">
//         <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Account Information</h2>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 University
//               </label>
//               <input
//                 type="text"
//                 name="university"
//                 value={formData.university}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Student ID
//               </label>
//               <input
//                 type="text"
//                 name="studentId"
//                 value={formData.studentId}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
//               />
//             </div>
//           </div>
//         </div>
//       </Card>

//       {/* Notification Settings */}
//       <Card className="p-6">
//         <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Notifications</h2>
//         <div className="space-y-4">
//           {[
//             { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
//             { key: 'push', label: 'Push Notifications', desc: 'Receive browser notifications' },
//             { key: 'studyReminders', label: 'Study Reminders', desc: 'Daily reminders to study' },
//             { key: 'examAlerts', label: 'Exam Alerts', desc: 'Notifications about upcoming exams' },
//           ].map((item) => (
//             <div key={item.key} className="flex items-center justify-between">
//               <div>
//                 <p className="font-medium text-gray-800 dark:text-white">{item.label}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
//               </div>
//               <button
//                 onClick={() => handleNotificationChange(item.key)}
//                 className={`relative w-16 h-8 rounded-full transition-colors ${
//                   notifications[item.key] ? 'bg-indigo-600' : 'bg-gray-300'
//                 }`}
//               >
//                 <div
//                   className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
//                     notifications[item.key] ? 'translate-x-8' : 'translate-x-0'
//                   }`}
//                 ></div>
//               </button>
//             </div>
//           ))}
//         </div>
//       </Card>

//       {/* Study Preferences */}
//       <Card className="p-6">
//         <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Study Preferences</h2>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Daily Study Goal (minutes)
//             </label>
//             <input
//               type="number"
//               defaultValue={60}
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Questions per Session
//             </label>
//             <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200">
//               <option>10 questions</option>
//               <option>20 questions</option>
//               <option>30 questions</option>
//               <option>50 questions</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Difficulty Level
//             </label>
//             <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200">
//               <option>Beginner</option>
//               <option>Intermediate</option>
//               <option>Advanced</option>
//               <option>Mixed</option>
//             </select>
//           </div>
//         </div>
//       </Card>

//       {/* Danger Zone */}
//       <Card className="p-6 border-red-200 dark:border-red-800">
//         <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">Danger Zone</h2>
//         <div className="space-y-3">
//           <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
//             <div>
//               <p className="font-medium text-gray-800 dark:text-white">Reset Progress</p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Clear all your study progress and start fresh
//               </p>
//             </div>
//             <Button variant="danger" size="sm">
//               Reset
//             </Button>
//           </div>
//           <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
//             <div>
//               <p className="font-medium text-gray-800 dark:text-white">Delete Account</p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Permanently delete your account and all data
//               </p>
//             </div>
//             <Button variant="danger" size="sm">
//               Delete
//             </Button>
//           </div>
//         </div>
//       </Card>

//       {/* Save Button */}
//       <div className="flex justify-end gap-3">
//         <Button variant="secondary">Cancel</Button>
//         <Button onClick={handleSave}>Save Changes</Button>
//       </div>
//     </div>
//   );
// }
export default function Settings(){
  return(
    <div>
      <h1 className="text-2xl font-bold text-white">coming soon</h1>
    </div>
  )
}