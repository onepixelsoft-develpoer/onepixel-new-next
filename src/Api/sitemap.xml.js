import { getWorkSection, getBloges } from "@/lib/api"; // your API functions

export default async function handler(req, res) {
  const baseUrl = "https://onepixel-new-next.vercel.app";

  try {
    // Fetch dynamic URLs
    const projects = await getWorkSection(); // array of projects
    const blogs = await getBloges(); // array of blogs

    // Static pages
    const staticPages = ["/", "/about", "/contact", "/services"];

    // Generate sitemap entries
    let sitemapEntries = staticPages
      .map(
        (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
  </url>`
      )
      .join("");  

    // Add projects
    sitemapEntries += projects
      .map(
        (project) => `
  <url>
    <loc>${baseUrl}/projects/${project.id}</loc>
  </url>`
      )
      .join("");

    // Add blogs
    sitemapEntries += blogs
      .map(
        (blog) => `
  <url>
    <loc>${baseUrl}/blog/${blog.slug}</loc>
  </url>`
      )
      .join("");

    // Final XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.status(200).send(sitemap);
  } catch (error) {
    console.error("Error generating sitemap", error);
    res.status(500).end();
  }
}
