const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function request(path, options = {}) {
  const token = localStorage.getItem("exitprep_token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers });
  if (!res.ok) {
    const err = await safeJson(res);
    throw new Error(err?.message || `HTTP ${res.status}`);
  }
  return safeJson(res);
}

async function safeJson(res) {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}
