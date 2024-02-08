import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const loggged = true;

  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (loggged) {
      return NextResponse.next();
    } else {
      url.pathname = '/dashboard/login';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/dashboard/:path*'],
};
