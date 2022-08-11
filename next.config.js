/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
    // loader: "imgix",
    // path: "https://townbucket.s3.us-east-2.amazonaws.com",
  },
};

module.exports = nextConfig;
