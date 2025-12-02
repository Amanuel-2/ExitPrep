import { useEffect, useState } from "react";
import { listCourses } from "../../api/questions";
import { Link } from "react-router-dom";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    listCourses().then(setCourses).catch((e) => setError(e.message));
  }, []);

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Courses</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {courses.map((c) => (
          <li key={c.id} className="border rounded p-3 bg-white">
            <div className="font-medium">{c.name}</div>
            <div className="text-sm text-gray-600">{c.code}</div>
            <Link to={`/study/${c.id}`} className="text-blue-600 text-sm mt-2 inline-block">
              Practice questions →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
