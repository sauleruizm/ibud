/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  experimental: { appDir: true},
  images.unoptimized = true
  // webpackDevMiddleware: config => {
  //   config.watchOptions = {
  //     poll: 800,
  //     aggregateTimeout: 300,
  //   }    

  //   return config
  // },
}

module.exports = nextConfig


// module.exports = {
//   webpackDevMiddleware: config => {
//     config.watchOptions = {
//       poll: 800,
//       aggregateTimeout: 300,
//     }    

//     return config
//   },
//   experimental: { appDir: true}
// }
