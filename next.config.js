/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    async exportPathMap(defaultPathMap) {
        return {
            ...defaultPathMap,
            '/data': { page: '/data' },
        };
    },
};

module.exports = nextConfig;