// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "i.pinimg.com",
//       },
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async redirects() {
    return [
      // ─────────────────────────────────────────────────────────────────
      // NAVODAYA — Root smartset page
      // ─────────────────────────────────────────────────────────────────
      {
        source: "/navodaya-smartset",
        destination: "/navodaya-entrance-exam",
        permanent: true,
      },
      // NAVODAYA — Class landing pages
      {
        source: "/navodaya-smartset/class-6",
        destination: "/navodaya-entrance-exam/class-6",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-9",
        destination: "/navodaya-entrance-exam/class-9",
        permanent: true,
      },
      // NAVODAYA — Class 6 sub-pages
      {
        source: "/navodaya-smartset/class-6/syllabus",
        destination: "/navodaya-entrance-exam/class-6/syllabus",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-6/previous-year-papers",
        destination: "/navodaya-entrance-exam/class-6/previous-year-papers",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-6/mock-tests",
        destination: "/navodaya-entrance-exam/class-6/mock-tests",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-6/practice",
        destination: "/navodaya-entrance-exam/class-6/practice",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-6/updates",
        destination: "/navodaya-entrance-exam/class-6/updates",
        permanent: true,
      },
      // NAVODAYA — Class 9 sub-pages
      {
        source: "/navodaya-smartset/class-9/syllabus",
        destination: "/navodaya-entrance-exam/class-9/syllabus",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-9/previous-year-papers",
        destination: "/navodaya-entrance-exam/class-9/previous-year-papers",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-9/mock-tests",
        destination: "/navodaya-entrance-exam/class-9/mock-tests",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-9/practice",
        destination: "/navodaya-entrance-exam/class-9/practice",
        permanent: true,
      },
      {
        source: "/navodaya-smartset/class-9/updates",
        destination: "/navodaya-entrance-exam/class-9/updates",
        permanent: true,
      },
      // NAVODAYA — Wildcard safety net (catches any other /navodaya-smartset/* URLs)
      {
        source: "/navodaya-smartset/:path*",
        destination: "/navodaya-entrance-exam/:path*",
        permanent: true,
      },
      // ─────────────────────────────────────────────────────────────────
      // SAINIK SCHOOL — Root smartset page
      // ─────────────────────────────────────────────────────────────────
      {
        source: "/sainik-school-smartset",
        destination: "/sainik-school-entrance-exam",
        permanent: true,
      },
      // SAINIK SCHOOL — Class landing pages
      {
        source: "/sainik-school-smartset/class-6",
        destination: "/sainik-school-entrance-exam/class-6",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-9",
        destination: "/sainik-school-entrance-exam/class-9",
        permanent: true,
      },
      // SAINIK SCHOOL — Class 6 sub-pages
      {
        source: "/sainik-school-smartset/class-6/syllabus",
        destination: "/sainik-school-entrance-exam/class-6/syllabus",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-6/previous-year-papers",
        destination:
          "/sainik-school-entrance-exam/class-6/previous-year-papers",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-6/mock-tests",
        destination: "/sainik-school-entrance-exam/class-6/mock-tests",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-6/practice",
        destination: "/sainik-school-entrance-exam/class-6/practice",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-6/updates",
        destination: "/sainik-school-entrance-exam/class-6/updates",
        permanent: true,
      },
      // SAINIK SCHOOL — Class 9 sub-pages
      {
        source: "/sainik-school-smartset/class-9/syllabus",
        destination: "/sainik-school-entrance-exam/class-9/syllabus",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-9/previous-year-papers",
        destination:
          "/sainik-school-entrance-exam/class-9/previous-year-papers",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-9/mock-tests",
        destination: "/sainik-school-entrance-exam/class-9/mock-tests",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-9/practice",
        destination: "/sainik-school-entrance-exam/class-9/practice",
        permanent: true,
      },
      {
        source: "/sainik-school-smartset/class-9/updates",
        destination: "/sainik-school-entrance-exam/class-9/updates",
        permanent: true,
      },
      // SAINIK SCHOOL — Wildcard safety net
      {
        source: "/sainik-school-smartset/:path*",
        destination: "/sainik-school-entrance-exam/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
