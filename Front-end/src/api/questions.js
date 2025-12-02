import { request } from "./config";

export function listCourses() {
  return request("/courses");
}

export function getCourseQuestions(courseId, params = {}) {
  const query = new URLSearchParams(params).toString();
  return request(`/courses/${courseId}/questions${query ? `?${query}` : ""}`);
}
