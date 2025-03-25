import { j as json } from "../../../../chunks/index.js";
const users = [
  {
    username: "admin",
    password: "admin123"
  },
  {
    username: "user",
    password: "user123"
  }
];
async function POST({ request, cookies }) {
  const { username, password } = await request.json();
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    cookies.set("session", JSON.stringify({ username: user.username }), {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24
      // 24 hours
    });
    return json({ success: true });
  }
  return json({ success: false, error: "Invalid credentials" }, { status: 401 });
}
export {
  POST
};
