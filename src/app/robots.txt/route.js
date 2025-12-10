export const revalidate = 0;
export const dynamic = "force-dynamic";
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ;
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.shikso.com/sitemap.xml

User-agent: *
Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /server/
Disallow: /_next/
Disallow: /static/
Disallow: /*?*

Allow: /_next/static/
Allow: /images/
Allow: /assets/
Allow: /fonts/`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
