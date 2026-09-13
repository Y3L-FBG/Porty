const API_BASE = "http://localhost:3000";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${API_BASE}/projects`);
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  const json: ApiResponse<Project[]> = await res.json();
  return json.data ?? [];
}

export async function sendContactMessage(payload: {
  name: string;
  email: string;
  message: string;
}): Promise<ApiResponse<unknown>> {
  const res = await fetch(`${API_BASE}/users/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
