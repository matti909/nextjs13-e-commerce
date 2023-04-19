/* eslint-disable indent */
/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: false,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["fakestoreapi.com"],
		unoptimized: false,
	}
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
