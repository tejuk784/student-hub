import { db } from "@/lib/db";
import Link from "next/link";

export default async function NewsPage() {
  const scholarships = await db.scholarship.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">National Scholarship Portal</h1>
        <p className="mt-2 text-blue-200">
          Find and apply for government-verified opportunities.
        </p>
      </div>

      {scholarships.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No scholarships found.</p>
          <p className="mt-2">Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scholarships.map((item: any) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow-sm hover:shadow-md transition"
            >
              <span className="text-xs font-bold text-blue-700 uppercase">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-3">
                {item.description}
              </p>
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  className="mt-4 inline-block bg-slate-800 text-white px-4 py-2 rounded"
                >
                  View Details
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}