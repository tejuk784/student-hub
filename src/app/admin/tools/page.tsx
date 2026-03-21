import { db } from "@/lib/db";
import Link from "next/link";

export default async function AdminToolsPage() {
  const tools = await db.tool.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Tools</h1>
        <Link
          href="/admin/tools/new"
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"
        >
          + Add Tool
        </Link>
      </div>

      {tools.length === 0 ? (
        <p className="text-muted-foreground">No tools yet. Add one!</p>
      ) : (
        <div className="grid gap-4">
          {tools.map((t: any) => (
            <div
              key={t.id}
              className="border rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h2 className="font-semibold">{t.name}</h2>
                <p className="text-sm text-muted-foreground">{t.category}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/tools/${t.id}/edit`}
                  className="text-sm border px-3 py-1 rounded hover:bg-muted"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link href="/admin" className="text-sm text-muted-foreground hover:underline">
          ← Back to Admin
        </Link>
      </div>
    </main>
  );
}