import { db } from "@/lib/db";
import Link from "next/link";

export default async function TechHubPage() {
  const tools = await db.tool.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="bg-slate-800 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">Tech Tools Directory</h1>
        <p className="mt-2 text-slate-300">
          Approved educational tools for students and developers.
        </p>
      </div>

      {tools.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No tools found.</p>
          <p className="mt-2">Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool: any) => (
            <div
              key={tool.id}
              className="bg-white border p-6 rounded border-t-4 border-t-blue-800 hover:shadow-md transition"
            >
              <h4 className="font-bold text-lg">{tool.name}</h4>
              <p className="text-sm text-gray-500">{tool.category}</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {tool.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  href={tool.websiteUrl}
                  target="_blank"
                  className="text-blue-800 underline font-medium text-sm"
                >
                  Visit Site
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}