import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

async function checkAuth({ event, resolve }) {
  const session = event.cookies.get('session');
  
  // Allow access to login page and API endpoints
  if (event.url.pathname === '/' || event.url.pathname.startsWith('/api/')) {
    return resolve(event);
  }
  
  // Check if user is authenticated
  if (!session) {
    throw redirect(303, '/');
  }
  
  return resolve(event);
}

export const handle = sequence(checkAuth); 