export const revalidate = 0;
export const dynamic = "force-dynamic";
import { apiClient } from "@/lib/api-client";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticPages = [
    "",
    "navodaya-entrance-exam",
    "sainik-school-entrance-exam",
    "rms-smartset",
    "blogs",
    "educational-news",
    "exam-list",
    "about-us",
    "contact-us",
    "exams",
    "nmms-scholarship-exam",
    "smartset-ntse",
    "smartset-rimc",
    "privacy-policy",
    "terms-and-conditions",
    "disclaimer-policy",
    "cookies-policy",
    "navodaya-entrance-exam/class-6",
    "navodaya-entrance-exam/class-9",
    "sainik-school-entrance-exam/class-6",
    "sainik-school-entrance-exam/class-9",
    "rms-smartset/class-6",
    "rms-smartset/class-9",
    "school-exam-smartset",
    "navodaya-entrance-exam/class-6/updates",
    "navodaya-entrance-exam/class-6/syllabus",
    "navodaya-entrance-exam/class-6/previous-year-papers",
    "navodaya-entrance-exam/class-6/mock-tests",
    "navodaya-entrance-exam/class-6/practice",
    "navodaya-entrance-exam/class-9/updates",
    "navodaya-entrance-exam/class-9/syllabus",
    "navodaya-entrance-exam/class-9/previous-year-papers",
    "navodaya-entrance-exam/class-9/mock-tests",
    "navodaya-entrance-exam/class-9/practice",
    "sainik-school-entrance-exam/class-6/updates",
    "sainik-school-entrance-exam/class-6/syllabus",
    "sainik-school-entrance-exam/class-6/previous-year-papers",
    "sainik-school-entrance-exam/class-6/mock-tests",
    "sainik-school-entrance-exam/class-6/practice",
    "sainik-school-entrance-exam/class-9/updates",
    "sainik-school-entrance-exam/class-9/syllabus",
    "sainik-school-entrance-exam/class-9/previous-year-papers",
    "sainik-school-entrance-exam/class-9/mock-tests",
    "sainik-school-entrance-exam/class-9/practice",
    "rms-smartset/class-6/updates",
    "rms-smartset/class-6/syllabus",
    "rms-smartset/class-6/previous-year-papers",
    "rms-smartset/class-6/mock-tests",
    "rms-smartset/class-6/practice",
    "rms-smartset/class-9/updates",
    "rms-smartset/class-9/syllabus",
    "rms-smartset/class-9/previous-year-papers",
    "rms-smartset/class-9/mock-tests",
    "rms-smartset/class-9/practice",
  ];

  let blogs = [];
  try {
    const blogResponse = await apiClient.get(
      "blogs/all/ed_tech?type=blog&status=Published",
    );
    const data = blogResponse.data.blogs;

    if (Array.isArray(data)) {
      blogs = data.map((item) => `blogs/${item?.uid}`);
    }
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }

  let news = [];
  try {
    const blogResponse = await apiClient.get(
      "blogs/all/ed_tech?type=news&status=Published",
    );
    const data = blogResponse.data.blogs;
    if (Array.isArray(data)) {
      news = data.map((item) => `educational-news/${item?.uid}`);
    }
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }

  const allUrls = staticPages.concat(blogs, news);

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
      "Content-Type": "application/xml",
    },
  });
}
