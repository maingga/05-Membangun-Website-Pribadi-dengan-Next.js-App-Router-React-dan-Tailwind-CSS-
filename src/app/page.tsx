import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Saya - Ahmad Nana Maingga",
  description:
    "Halaman tentang Ahmad Nana Maingga, mahasiswa Teknik Informatika yang tertarik dalam pengembangan web, IoT, dan cloud computing.",
  openGraph: {
    title: "Tentang Ahmad Nana Maingga",
    description:
      "Mahasiswa Teknik Informatika dengan minat dalam pengembangan web, IoT, dan cloud computing.",
    images: [{ url: "/images/profile.png" }], // Fix tipe images
    url: "https://example.com/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      {/* Foto Profil */}
      <Image
        src="/images/profile.png"
        alt="Foto Profil"
        width={150}
        height={150}
        priority
        className="mx-auto rounded-full border-4 border-teal-500"
      />
      
      {/* Nama dan Deskripsi */}
      <h1 className="text-4xl font-bold text-gray-900 mt-4">
        Ahmad Nana Maingga
      </h1>
      <p className="text-gray-600 mt-2">
        Saya adalah seorang mahasiswa Teknik Informatika yang tertarik dalam
        pengembangan web, IoT, dan cloud computing.
      </p>

      {/* Media Sosial */}
      <div className="flex justify-center gap-6 mt-4">
        <Link
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
            alt="GitHub"
            width={30}
            height={30}
            priority
          />
        </Link>
        <Link
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
            alt="LinkedIn"
            width={30}
            height={30}
            priority
          />
        </Link>
        <Link
          href="https://twitter.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg"
            alt="Twitter"
            width={30}
            height={30}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
