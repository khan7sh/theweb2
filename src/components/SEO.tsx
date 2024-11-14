import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: object;
}

export default function SEO({
  title,
  description,
  canonical = 'https://thecraftweb.com',
  type = 'website',
  image = 'https://thecraftweb.com/og-image.jpg',
  schema
}: SEOProps) {
  const siteTitle = 'TheCraftWeb - Modern Web Development Agency';
  const fullTitle = title === 'Home' ? siteTitle : `${title} | ${siteTitle}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TheCraftWeb",
    "url": "https://thecraftweb.com",
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://thecraftweb.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="TheCraftWeb" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#3b0764" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
} 