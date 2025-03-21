import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-storage');
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');

  if (!authToken && !isAuthPage) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (authToken && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};