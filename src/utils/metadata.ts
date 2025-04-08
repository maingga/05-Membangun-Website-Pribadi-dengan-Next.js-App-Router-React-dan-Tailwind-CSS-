export const defaultMetadata = {
    metadataBase: new URL("http://localhost:3000"), // Ganti dengan domain aslimu
    title: "Ahmad Nana Maingga - Portfolio",
    description: "Selamat datang di website pribadi Ahmad Nana Maingga. Temukan proyek, esai, dan pengalaman saya dalam dunia teknologi.",
    openGraph: {
      title: "Ahmad Nana Maingga - Portfolio",
      description: "Jelajahi proyek, esai, dan pengalaman saya di dunia teknologi, pengembangan web, dan IoT.",
      url: "https://example.com",
      siteName: "Ahmad Nana Maingga",
      images: [
        {
          url: "/images/og-image.png", // Path relatif ke public/
          width: 1200,
          height: 630,
          alt: "Ahmad Nana Maingga - Portfolio",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ahmad Nana Maingga - Portfolio",
      description: "Jelajahi proyek dan artikel tentang teknologi dari Ahmad Nana Maingga.",
      images: ["/images/og-image.png"],
    },
  };
  