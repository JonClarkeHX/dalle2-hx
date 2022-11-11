/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir: true,
  }
}


module.exports = { 
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        port: '',
        pathname: '/private/org-FhqMGJlJmrKB9sqGAHvVsRHb/user-2fFtynu05Gvi9KePGshtPwKj/**'
      }
    ]
  },
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    }
    return config
  }
}