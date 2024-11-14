import { writeFileSync } from 'fs';
import { resolve } from 'path';

const pages = [
  '',
  '/about',
  '/services',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies'
];

const baseUrl = 'https://thecraftweb.co.uk';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemap); 