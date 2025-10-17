export function getCanonicalUrl(route = "/") {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"; // fallback for local dev

  // Ensure route starts with /
  const cleanRoute = route.startsWith("/") ? route : `/${route}`;

  return `${baseUrl}${cleanRoute}`;
}