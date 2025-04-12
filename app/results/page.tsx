// app/results/page.tsx

"use client";

import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const dummyResults = [
    {
      title: "Buy Sleeveless Gilet Jacket - Best Prices in India",
      link: "https://example.com/product/gilet-jacket",
    },
    {
      title: "Stylish Floral Crop Tops Online",
      link: "https://example.com/product/floral-crop-top",
    },
    {
      title: "Cut-Out Bodysuits - Trendy and Affordable",
      link: "https://example.com/product/bodysuit",
    },
    {
      title: "Black Leather Skirts with Button Detail",
      link: "https://example.com/product/leather-skirt",
    },
    {
      title: "Oversized Women's Leather Jackets in India",
      link: "https://example.com/product/oversized-leather-jacket",
    },
  ];

  const filtered = dummyResults.filter((item) =>
    item.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="min-h-screen bg-[#1f2125] text-white p-6 font-sans">
      <h1 className="text-2xl font-semibold mb-4">
        Search Results for: <span className="text-purple-300">"{query}"</span>
      </h1>

      {filtered.length > 0 ? (
        <ul className="space-y-4">
          {filtered.map((result, idx) => (
            <li
              key={idx}
              className="bg-[#2f3133] p-4 rounded-lg hover:bg-[#3a3c3f] transition"
            >
              <a href={result.link} target="_blank" rel="noopener noreferrer">
                <h2 className="text-lg font-medium">{result.title}</h2>
                <p className="text-sm text-gray-400">{result.link}</p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No results found.</p>
      )}
    </div>
  );
}
