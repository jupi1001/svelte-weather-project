import { json } from '@sveltejs/kit';

const users = [
  {
    username: 'admin',
    password: import.meta.env.VITE_ADMIN_PASSWORD
  },
  {
    username: 'user',
    password: import.meta.env.VITE_USER_PASSWORD
  }
];

export async function POST({ request, cookies }) {
  const { username, password } = await request.json();
  
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // Set session cookie
    cookies.set('session', JSON.stringify({ username: user.username }), {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 // 24 hours
    });
    
    return json({ success: true });
  }
  
  return json({ success: false, error: 'Invalid credentials' }, { status: 401 });
} 