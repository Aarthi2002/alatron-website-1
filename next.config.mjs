/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "admin.shrewdbs.com",
      },
    ],
    formats: ['image/webp'], 
  },
  async redirects() {
    return [
      {
        source: '/services.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products.php',
        destination: '/',
        permanent: true,
      },

      {
        source: '/contact.php',
        destination: '/',
        permanent: true,
      },

      {
        source: '/team.php',
        destination: '/',
        permanent: true,
      },

      {
        source: '/career.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/privacy-policy.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
