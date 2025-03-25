"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function Submit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    county: "",
    subCounty: "",
    story: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step === 3 && !formData.story) return;
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center flex flex-col items-center mb-10">
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
          <p className="text-white/70 text-lg">Let Kenya hear your story</p>
        </div>

        <form className="space-y-6 px-4">
          {step === 1 && (
            <div className="space-y-2">
              <label className="text-lg font-medium text-white flex flex-col mb-2">
                <span>Your Name (or leave blank for anonymous)</span>
                <span className="text-sm font-light text-gray-500">
                  We respect your privacy if you choose to remain anonymous.
                </span>
              </label>
              <input
                className="flex w-full rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-white/40 h-12"
                placeholder="Your name (optional)"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2">
              <div className="mb-4">
                <label className="text-lg font-medium text-white flex flex-col mb-2">
                  <span>Which county are you from?</span>
                  <span className="text-sm font-light text-gray-500">
                    Help us understand where in Kenya you're from.
                  </span>
                </label>
                <select
                  className="flex w-full rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white h-12"
                  name="county"
                  onChange={handleChange}
                  value={formData.county}
                >
                  <option value="">Select a county</option>
                  {counties.map((county) => (
                    <option key={county.code} value={county.name}>
                      {county.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-lg font-medium text-white flex flex-col mb-2">
                  <span>Which sub-county?</span>
                  <span className="text-sm font-light text-gray-500">
                    For more specific location data (optional)
                  </span>
                </label>
                <input
                  className="flex w-full rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-white/40 h-12"
                  placeholder="Enter sub-county"
                  name="subCounty"
                  onChange={handleChange}
                  value={formData.subCounty}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-2">
              <label className="text-lg font-medium text-white flex flex-col mb-2">
                <span>
                  What would you want changed as a youth in kenya? How has the
                  government failed you?{" "}
                </span>
                <span className="text-sm font-light text-gray-500">
                  Share your thoughts.
                </span>
              </label>
              <textarea
                className="flex w-full rounded-md border px-3 py-2 bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-white/40 h-32 resize-none"
                placeholder="Share your experience..."
                name="story"
                onChange={handleChange}
                value={formData.story}
                required
              ></textarea>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                className="inline-flex items-center justify-center text-sm border border-[#166E38] shadow h-9 bg-[#166E38] text-white font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </button>
            )}
            <button
              type={step === 3 ? "submit" : "button"}
              className="inline-flex items-center justify-center text-sm border border-[#ED1D24] shadow h-9 bg-[#ED1D24] text-white font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
              onClick={step === 3 ? undefined : nextStep}
            >
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-white/50 text-sm">
          <p>Siasa Place © 2025</p>
        </div>
      </div>
    </div>
  );
}
