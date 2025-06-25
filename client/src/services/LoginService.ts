export interface LoginDto { username: string; password: string }
export interface UserView {
  id: string; username: string; email: string; isActive: boolean; roleName: string;
}

export async function login(dto: LoginDto) {
  const res = await fetch("http://localhost:5090/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dto),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function listUsers(): Promise<UserView[]> {
  const res = await fetch("http://localhost:5090/api/users");
  if (!res.ok) throw new Error("Failed to load users");
  return res.json();
}
