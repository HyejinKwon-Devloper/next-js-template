/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['jotai-devtools'],
  // async headers() {
  //   return [
  //     {
  //       source: '/api/:path*', // API 경로에만 헤더 적용
  //       headers: [
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin', // Referrer 정책 설정
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
