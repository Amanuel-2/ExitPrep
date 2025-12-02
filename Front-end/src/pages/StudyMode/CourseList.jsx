import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseQuestions } from "../../api/questions";
import QuestionCard from "../../components/QuestionCard";

export default function CourseQuestions() {
  const { courseId } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getCourseQuestions(courseId, { limit: 10 }).then(setItems).catch((e) => setError(e.message));
  }, [courseId]);

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Questions</h2>
      {items.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  );
}
