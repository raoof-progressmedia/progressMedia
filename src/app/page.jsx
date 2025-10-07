"use client";

import { data } from "../data/questions";
import { flattenData } from "../lib/convertData";

export default function HomePage() {
  const formatted = flattenData(data);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Flattened Data Preview</h1>
      <ul className="space-y-3">
        {formatted.map((item, i) => (
          <li key={i} className="p-3 border rounded-lg bg-white shadow-sm">
            <p className="font-semibold">{item.question}</p>
            <p className="text-gray-700">{item.answer}</p>
            <p className="text-sm text-gray-500 mt-1">
              {item.category} {item.subcategory && `› ${item.subcategory}`}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
