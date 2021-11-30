module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/profile',
        destination: '/',
        permanent: true
      }
    ]
  }
}
