// "use client"
// import Head from "next/head";
// import { usePathname, useRouter } from "next/navigation";


// const SEO = ({
//   metaTitle,
//   metaDescription = "",
//   keywords = "",
//   // url = "",
//   // canonical = "",
//   ogTitle,
//   ogDescription,
//   // ogImage,
//   twitterTitle,
//   twitterDescription,
//   twitterImage,
//   robots = "index, follow",
//   favicon = "/favicon.ico",
// }) => {
//   const router = useRouter();
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
//   // const url = `${baseUrl}${router.asPath}`;

//   const path = router.asPath === "/" ? "" : router.asPath;
//   const url = `${baseUrl}${path}`;


//   if (!metaTitle) {
//     // console.warn('SEO component: "metaTitle" is required but missing.');
//     return null;
//   }

//   const finalOgImage = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1756812585/Vector_1_l64yxw.png";
//   return (
//     <Head>
//       {/* General Meta */}
//       <title>{metaTitle}</title>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta name="description" content={metaDescription} />
//       <meta name="keywords" content={keywords} />
//       <meta name="robots" content={robots} />
//       <link rel="canonical" href={url} />

//       {/* Favicon */}
//       <link rel="icon" href={favicon} type="image/x-icon" />

//       {/* Open Graph Tags */}
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content={url} />
//       <meta property="og:title" content={ogTitle || metaTitle} />
//       <meta
//         property="og:description"
//         content={ogDescription || metaDescription}
//       />
//       <meta property="og:image" content={finalOgImage} />

//       {/* Twitter Card Tags */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:url" content={url} />
//       <meta name="twitter:title" content={twitterTitle || metaTitle} />
//       <meta
//         name="twitter:description"
//         content={twitterDescription || metaDescription}
//       />
//       {twitterImage && <meta name="twitter:image" content={finalOgImage} />}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             logo: "/favicon.ico",
//           }),
//         }}
//       />
//     </Head>
//   );
// };

// export default SEO;


// "use client";

// import Head from "next/head";
// import { usePathname } from "next/navigation";

// const SEO = ({
//   metaTitle = "Default Title",
//   metaDescription = "Default description.",
//   favicon = "/favicon.ico",
// }) => {
//   const pathname = usePathname();
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
//   const url = `${baseUrl}${pathname}`;

//   return (
//     <Head>
//       <title>{metaTitle}</title>
//       <meta name="description" content={metaDescription} />
//       <link rel="icon" href={favicon} />
//       <link rel="canonical" href={url} />

//       {/* Open Graph */}
//       <meta property="og:title" content={metaTitle} />
//       <meta property="og:description" content={metaDescription} />
//       <meta property="og:url" content={url} />
//       <meta property="og:type" content="website" />
//       <meta property="og:image" content={`${baseUrl}/og-image.png`} />

//       {/* Twitter Card */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={metaTitle} />
//       <meta name="twitter:description" content={metaDescription} />
//       <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
//     </Head>
//   );
// };

// export default SEO;
"use client";

import Head from "next/head";

const SEO = ({
  title = "Default Title",
  description = "Default description",
  keywords = [],
  image = "/Shiksologo.png",
  route = "/",
  favicon = "/favicon.ico",
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonical = route.startsWith("http") ? route : `${baseUrl}${route}`;
  const ogImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={canonical} />
      <link rel="icon" href={favicon} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

       {/*  Robots Meta */}
      <meta name="robots" content={robots} />
    </Head>
  );
};

export default SEO;
