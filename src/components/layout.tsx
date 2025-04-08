import { defaultMetadata } from "@/utils/metadata";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const metadata = {
    ...defaultMetadata,
  };

  return (
    <html lang="id">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url || "/default-image.jpg"} />
        <meta property="og:url" content={metadata.openGraph?.url || "https://example.com"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph?.images?.[0]?.url || "/default-image.jpg"} />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
