import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esai Saya - Ahmad Nana Maingga",
  description: "Kumpulan esai yang saya tulis tentang teknologi, pemrograman, dan produktivitas.",
  openGraph: {
    title: "Esai Saya - Ahmad Nana Maingga",
    description: "Baca berbagai esai saya tentang pengembangan web, IoT, dan cloud computing.",
    url: "https://example.com/essays",
    images: ["/images/essays-preview.png"],
    type: "article",
  },
};

const essays = [
  {
    id: 1,
    title: "Menjadi Programmer yang Lebih Produktif",
    description: "Tips dan trik untuk meningkatkan produktivitas dalam coding.",
    link: "#",
  },
  {
    id: 2,
    title: "Mengenal Arsitektur Microservices",
    description: "Penjelasan tentang konsep dan implementasi microservices.",
    link: "#",
  },
  {
    id: 3,
    title: "Pemrograman Fungsional vs OOP",
    description: "Perbandingan antara paradigma pemrograman yang populer.",
    link: "#",
  },
];

export default function EssaysPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900">Esai Saya</h1>
      <p className="text-gray-600 mt-2">
        Berikut adalah beberapa artikel yang telah saya tulis.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {essays.map((essay) => (
          <div
            key={essay.id}
            className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {essay.title}
            </h3>
            <p className="text-gray-600 mt-2">{essay.description}</p>
            <Link
              href={essay.link}
              className="mt-3 inline-block text-teal-600 hover:underline font-medium"
            >
              Baca Selengkapnya →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
