"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThumbsUp, Share2 } from "lucide-react"; // Import icons

// const grievances = [
//   {
//     id: 1,
//     county: "Nairobi",
//     subCounty: "Westlands",
//     date: "2025-03-10",
//     text: "Access to IDs has been difficult in my area.",
//   },
//   {
//     id: 2,
//     county: "Mombasa",
//     subCounty: "Nyali",
//     date: "2025-03-12",
//     text: "Long queues at the registration office.",
//   },
//   {
//     id: 3,
//     county: "Kisumu",
//     subCounty: "Kisumu Central",
//     date: "2025-03-14",
//     text: "Bribery is a major issue when trying to get an ID.",
//   },
// ];

const counties = [
  { name: "Mombasa", code: 1 },
  { name: "Kwale", code: 2 },
  { name: "Kilifi", code: 3 },
  { name: "Tana River", code: 4 },
  { name: "Lamu", code: 5 },
  { name: "Taita-Taveta", code: 6 },
  { name: "Garissa", code: 7 },
  { name: "Wajir", code: 8 },
  { name: "Mandera", code: 9 },
  { name: "Marsabit", code: 10 },
  { name: "Isiolo", code: 11 },
  { name: "Meru", code: 12 },
  { name: "Tharaka-Nithi", code: 13 },
  { name: "Embu", code: 14 },
  { name: "Kitui", code: 15 },
  { name: "Machakos", code: 16 },
  { name: "Makueni", code: 17 },
  { name: "Nyandarua", code: 18 },
  { name: "Nyeri", code: 19 },
  { name: "Kirinyaga", code: 20 },
  { name: "Murang'a", code: 21 },
  { name: "Kiambu", code: 22 },
  { name: "Turkana", code: 23 },
  { name: "West Pokot", code: 24 },
  { name: "Samburu", code: 25 },
  { name: "Trans-Nzoia", code: 26 },
  { name: "Uasin Gishu", code: 27 },
  { name: "Elgeyo-Marakwet", code: 28 },
  { name: "Nandi", code: 29 },
  { name: "Baringo", code: 30 },
  { name: "Laikipia", code: 31 },
  { name: "Nakuru", code: 32 },
  { name: "Narok", code: 33 },
  { name: "Kajiado", code: 34 },
  { name: "Kericho", code: 35 },
  { name: "Bomet", code: 36 },
  { name: "Kakamega", code: 37 },
  { name: "Vihiga", code: 38 },
  { name: "Bungoma", code: 39 },
  { name: "Busia", code: 40 },
  { name: "Siaya", code: 41 },
  { name: "Kisumu", code: 42 },
  { name: "Homa Bay", code: 43 },
  { name: "Migori", code: 44 },
  { name: "Kisii", code: 45 },
  { name: "Nyamira", code: 46 },
  { name: "Nairobi", code: 47 },
];

export default function Grievances() {
  const [grievances, setGrievances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formattedDate, setFormattedDate] = useState("");
  const [filters, setFilters] = useState({
    keyword: "",
    county: "",
    subCounty: "",
    date: "",
  });

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const res = await fetch("/api/grievances");
        const data = await res.json();
        setGrievances(data);
      } catch (error) {
        console.error("Failed to fetch grievances:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGrievances();
  }, []);

  useEffect(() => {
    setFormattedDate(
      new Date(grievance.createdAt).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, [grievance.createdAt]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({ keyword: "", county: "", subCounty: "", date: "" });
  };

  const filteredGrievances = grievances.filter(
    (g) =>
      (filters.keyword === "" ||
        g.story.toLowerCase().includes(filters.keyword.toLowerCase())) &&
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
            value={filters.keyword}
            onChange={handleFilterChange}
          />
          <input
            type="date"
            name="date"
            className="rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white h-12"
            value={filters.date}
            onChange={handleFilterChange}
          />
          <select
            name="county"
            className="rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white h-12"
            value={filters.county}
            onChange={handleFilterChange}
          >
            <option value="">All Counties</option>
            {counties.map((county) => (
              <option key={county.code} value={county.name}>
                {county.name}
              </option>
            ))}
          </select>
          <button
            onClick={resetFilters}
            className="border border-[#ED1D24] bg-[#ED1D24] text-white font-medium rounded-md px-4 py-2 transition-all hover:scale-105"
          >
            Reset Filters
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-[#ED1D24] rounded-full animate-spin"></div>
          </div>
        ) : grievances.length === 0 ? (
          <p>No grievances found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            {filteredGrievances.map((g) => (
              <div
                key={g._id}
                className="bg-[#222222] rounded-lg p-4 border-l-4 border-[#ED1D24] shadow-md"
              >
                <h4 className="text-gray-300">
                  {g?.name ? g?.name : "Anonymous"}
                </h4>
                <p className="text-gray-300">{g?.story}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {g?.county}, {g?.subCounty} -
                  <span className="text-xs text-gray-500 mt-2">
                    {" "}
                    {formattedDate}
                  </span>
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
        )}

        <div className="mt-10 text-center text-white/50 text-sm">
          <p>Siasa Place © 2025</p>
        </div>
      </section>
    </main>
  );
}
