export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import Link from "next/link";

export default async function AdminScholarshipsPage() {
  const scholarships = await db.scholarship.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Scholarships</h1>
        <Link href="/admin/scholarships/new" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
          + Add Scholarship
        </Link>
      </div>
      <div className="grid gap-4">
        {scholarships.map((s: any) => (
          <div key={s.id} className="border rounded-lg p-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">{s.title}</h2>
              <p className="text-sm text-muted-foreground">{s.category}</p>
            </div>
            <Link href={`/admin/scholarships/${s.id}/edit`} className="text-sm border px-3 py-1 rounded hover:bg-muted">
              Edit
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/admin" className="text-sm text-muted-foreground hover:underline">
          ← Back to Admin
        </Link>
      </div>
    </main>
  );
}