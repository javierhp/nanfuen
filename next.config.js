/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  ...(isProd ? { output: 'export' } : {}),
  trailingSlash: true,
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
      paths[`/${locale}`] = { page: '/[locale]', query: { locale } };
      paths[`/${locale}/about`] = { page: '/[locale]/about', query: { locale } };
      paths[`/${locale}/classes`] = { page: '/[locale]/classes', query: { locale } };
      paths[`/${locale}/shohin`] = { page: '/[locale]/shohin', query: { locale } };
      paths[`/${locale}/catalog`] = { page: '/[locale]/catalog', query: { locale } };

      categories.forEach((category) => {
        paths[`/${locale}/catalog/${category}`] = { page: '/[locale]/catalog/[category]', query: { locale, category } };
      });
    });

    return paths;
  },
}

module.exports = nextConfig;
