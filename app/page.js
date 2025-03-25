import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 bg-black text-white overflow-hidden">
      <Link href="/">
        <Image
          alt="Siasa Place"
          width={70}
          height={57}
          className="mt-4 mb-2 cursor-pointer"
          src="/logo.png"
          priority
        />
      </Link>

      <section className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-16 md:py-24">
        <div className="w-24 h-1 bg-gradient-to-r from-[#ED1D24] to-[#166E38] rounded-full mb-8"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-[#ED1D24] via-white to-[#166E38] bg-clip-text text-transparent">
            #SiasaYaID by Siasa Place
          </span>{" "}
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-10 max-w-2xl">
          Access to IDs is a major barrier to young people's political
          participation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/submit"
            className="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow h-9 bg-[#ED1D24] hover:bg-[#ED1D24] text-white font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
          >
            What has been your experience?
          </Link>
          <Link
            href="/grievances"
            className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow h-9 bg-[#166E38] text-white font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
          >
            Other experiences
          </Link>
        </div>
      </section>

      <section className="w-full max-w-2xl mx-auto py-8 md:py-16">
        <div className="bg-[#222222] rounded-lg p-6 md:p-8 mb-12 relative overflow-hidden border-l-4 border-[#ED1D24]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About the Site
          </h2>
          <p className="text-md md:text-lg text-gray-300 mb-6 leading-relaxed">
            Youth 4 Kenya is a platform for young Kenyans to express how the
            government has failed them. Whether it's education, employment,
            healthcare, or governance—share what you want to see changed in
            Kenya. By coming together, we can amplify our voices and demand a
            better Kenya for all.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/submit"
            className="inline-flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow h-9 bg-[#ED1D24] hover:bg-[#ED1D24] text-white font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
          >
            What has been your experience?
          </Link>
          <Link
            href="/grievances"
            className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow h-9 bg-[#166E38] text-white font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
          >
            Other experiences
          </Link>
        </div>
      </section>
    </main>
  );
}
