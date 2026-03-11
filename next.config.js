/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
    };

    const locales = ['es', 'en'];
    const categories = ['Pot', 'tree', 'Tools'];

    locales.forEach((locale) => {
      paths[`/${locale}`] = { page: '/[locale]' };
      paths[`/${locale}/about`] = { page: '/[locale]/about' };
      paths[`/${locale}/classes`] = { page: '/[locale]/classes' };
      paths[`/${locale}/shohin`] = { page: '/[locale]/shohin' };
      paths[`/${locale}/catalog`] = { page: '/[locale]/catalog' };

      categories.forEach((category) => {
        paths[`/${locale}/catalog/${category}`] = { page: '/[locale]/catalog/[category]' };
      });
    });

    return paths;
  },
}

module.exports = nextConfig;
