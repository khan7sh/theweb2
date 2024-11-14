import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

try {
  await writeFile(resolve(process.cwd(), 'public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
} 