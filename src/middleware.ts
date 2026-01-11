import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'zh', 'hi']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is for a static file or api
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return
  }

  // 1. Redirect /en to / (clean URL for default language)
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const newPath = pathname === '/en' ? '/' : pathname.replace(/^\/en/, '')
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  // 2. Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 3. If missing locale (e.g. root '/'), rewrite to /en to handle internally
  if (!pathnameHasLocale) {
    return NextResponse.rewrite(
      new URL(`/en${pathname === '/' ? '' : pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
