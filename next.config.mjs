const repoName = 'GlabanWebsite';
const isCI = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isCI ? `/${repoName}` : '',
  assetPrefix: isCI ? `/${repoName}/` : '',
};

export default nextConfig;
