"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThumbsUp, Share2 } from "lucide-react"; // Import icons

const grievances = [
  {
    id: 1,
    county: "Nairobi",
    subCounty: "Westlands",
    date: "2025-03-10",
    text: "Access to IDs has been difficult in my area.",
  },
  {
    id: 2,
    county: "Mombasa",
    subCounty: "Nyali",
    date: "2025-03-12",
    text: "Long queues at the registration office.",
  },
  {
    id: 3,
    county: "Kisumu",
    subCounty: "Kisumu Central",
    date: "2025-03-14",
    text: "Bribery is a major issue when trying to get an ID.",
  },
];

export default function Grievances() {
  const [filters, setFilters] = useState({
    keyword: "",
    county: "",
    subCounty: "",
    date: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({ keyword: "", county: "", subCounty: "", date: "" });
  };

  const filteredGrievances = grievances.filter(
    (g) =>
      (filters.keyword === "" ||
        g.text.toLowerCase().includes(filters.keyword.toLowerCase())) &&
      (filters.county === "" || g.county === filters.county) &&
      (filters.subCounty === "" || g.subCounty === filters.subCounty) &&
      (filters.date === "" || g.date === filters.date)
  );

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
          Voices of Kenyans
        </h1>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <input
            type="text"
            name="keyword"
            placeholder="Search by keyword"
            className="rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white h-12"
            onChange={handleFilterChange}
          />
          <input
            type="date"
            name="date"
            className="rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white h-12"
            onChange={handleFilterChange}
          />
          <select
            name="county"
            className="rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white h-12"
            onChange={handleFilterChange}
          >
            <option value="">All Counties</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
          </select>
          <button
            onClick={resetFilters}
            className="border border-[#ED1D24] bg-[#ED1D24] text-white font-medium rounded-md px-4 py-2 transition-all hover:scale-105"
          >
            Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {filteredGrievances.map((g) => (
            <div
              key={g.id}
              className="bg-[#222222] rounded-lg p-4 border-l-4 border-[#ED1D24] shadow-md"
            >
              <p className="text-gray-300">{g.text}</p>
              <p className="text-sm text-gray-500 mt-2">
                {g.county}, {g.subCounty} - {g.date}
              </p>
              <div className="flex gap-4 mt-4">
                <button className="text-white hover:text-[#166E38] transition-all">
                  <ThumbsUp size={15} />
                </button>
                <button className="text-white hover:text-[#ED1D24] transition-all">
                  <Share2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
