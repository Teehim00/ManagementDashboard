// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [{ hostname: "images.pexels.com" }],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "res.cloudinary.com" }, // เพิ่ม Cloudinary ที่นี่
    ],
  },
};

export default nextConfig;
