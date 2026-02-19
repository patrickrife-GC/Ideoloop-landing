import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        <meta name="description" content="The stories are already in you — we set them free. Join the Ideoloop waitlist for early access." />

        {/* Open Graph */}
        <meta property="og:title" content="Stop Writing. Start Talking." />
        <meta property="og:description" content="The stories are already in you — we set them free." />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ideoloop.ai" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stop Writing. Start Talking." />
        <meta name="twitter:description" content="The stories are already in you — we set them free." />
        <meta name="twitter:image" content="/assets/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
