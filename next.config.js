/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{ source: '/book', destination: '/assessment', permanent: true },
			{ source: '/book/:path*', destination: '/assessment', permanent: true }
		]
	}
}

module.exports = nextConfig
