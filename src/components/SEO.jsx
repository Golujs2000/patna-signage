import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://patnasignage.com/assets/Hero%20background%20image.png',
  schema = null,
  keywords = ''
}) {
  const siteTitle = 'Patna Signage | #1 Sign Board Manufacturer in Patna, Bihar';
  const fullTitle = title ? `${title} | Patna Signage` : siteTitle;
  const metaDescription = description || 'Leading sign board manufacturer in Patna, Bihar. Specializing in LED 3D acrylic letters, ACP cladding, glow signs, titanium steel letters, and retail branding with in-house CNC factory.';
  const currentCanonical = canonicalUrl ? `https://patnasignage.com${canonicalUrl}` : 'https://patnasignage.com/';

  return (
    <Helmet>
      {/* Basic Title and Description */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Patna Signage" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
