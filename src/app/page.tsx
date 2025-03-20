import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <Image
        src="/images/profile.png"
        alt="Foto Profil"
        width={150}
        height={150}
        className="mx-auto rounded-full border-4 border-teal-500"
      />
      <h1 className="text-4xl font-bold text-gray-900 mt-4">Ahmad Nana Maingga</h1>
      <p className="text-gray-600 mt-2">
        Saya adalah seorang mahasiswa Teknik Informatika yang tertarik dalam
        pengembangan web, IoT, dan cloud computing.
      </p>

      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com" target="_blank">
          <Image 
            src="https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg" 
            alt="GitHub" width={30} height={30} 
          />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <Image 
            src="https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg" 
            alt="LinkedIn" width={30} height={30} 
          />
        </a>
        <a href="https://twitter.com" target="_blank">
          <Image 
            src="https://cdn.jsdelivr.net/npm/simple-icons/icons/twitter.svg" 
            alt="Twitter" width={30} height={30} 
          />
        </a>
      </div>
    </div>
      );
}
