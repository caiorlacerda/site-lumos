/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/proposta_vitru',
        destination: '/proposta_vitru_v2/',
        permanent: false,
      },
      {
        source: '/proposta_vitru/',
        destination: '/proposta_vitru_v2/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
