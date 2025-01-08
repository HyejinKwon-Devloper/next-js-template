import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = ['http://l92.168.0.24:10040', 'http://localhost:10040'];

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// local server <> local client cors에서 해결을 위해 추가
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    // Check the origin from the request
    const origin = request.headers.get('origin') ?? '';
    const isAllowedOrigin = allowedOrigins.includes(origin);

    // Handle preflighted requests
    const isPreflight = request.method === 'OPTIONS';

    if (isPreflight) {
      const preflightHeaders = {
        ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
        ...corsOptions,
      };
      return NextResponse.json({}, { headers: preflightHeaders });
    }

    // Handle simple requests
    const response = NextResponse.next();

    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin);
    }

    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/api/:path*',
};
