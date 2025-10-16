import { apiClient } from "@/lib/api-client";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const staticPages = [
    "",
    "about-us",
    "contact-us",
    "blogs",
    "disclaimer-policy",
    "privacy-policy",
    "terms-and-conditions",
    "cookies-policy",
  ];

  let blogs = [];
  try {
    const blogResponse = await apiClient.get("blogs/all/travel");
    const data = blogResponse.data.blogs;

    if (Array.isArray(data)) {
      blogs = data.map((item) => `blogs/${item?.uid}`);
    }
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }
  const allUrls = staticPages.concat(blogs);

  const urls = allUrls.map((page) => {
    return `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${urls.join("")}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
