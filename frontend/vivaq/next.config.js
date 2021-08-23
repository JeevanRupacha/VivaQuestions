/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

   async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/JeevanRupacha',
        permanent: false,
        basePath: false
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/jivanrupacha',
        permanent: false,
        basePath: false
      }
    ];
  }
}
