"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditToolPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    websiteUrl: "",
    isFeatured: false,
  });

  useEffect(() => {
    async function fetchTool() {
      const res = await fetch(`/api/admin/tools/${id}`);
      const data = await res.json();
      setForm({
        name: data.name ?? "",
        category: data.category ?? "",
        description: data.description ?? "",
        websiteUrl: data.websiteUrl ?? "",
        isFeatured: data.isFeatured ?? false,
      });
      setFetching(false);
    }
    fetchTool();
  }, [id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await fetch(`/api/admin/tools/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    router.push("/admin/tools");
  }

  if (fetching) {
    return <p className="container mx-auto px-4 py-8">Loading...</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit Tool</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input name="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border rounded-lg px-3 py-2 mt-1"/>
        </div>
        <div>
          <label className="text-sm font-medium">Category</label>
          <input name="category" required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border rounded-lg px-3 py-2 mt-1"/>
        </div>
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea name="description" required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full border rounded-lg px-3 py-2 mt-1" rows={3}/>
        </div>
        <div>
          <label className="text-sm font-medium">Website URL</label>
          <input name="websiteUrl" type="url" required value={form.websiteUrl} onChange={(e) => setForm({ ...form, websiteUrl: e.target.value })} className="w-full border rounded-lg px-3 py-2 mt-1"/>
        </div>
        <div className="flex items-center gap-2">
          <input name="isFeatured" type="checkbox" id="isFeatured" checked={form.isFeatured} onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })} className="w-4 h-4"/>
          <label htmlFor="isFeatured" className="text-sm font-medium">Featured Tool?</label>
        </div>
        <button type="submit" disabled={loading} className="bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50">
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
      <a href="/admin/tools" className="text-sm text-muted-foreground hover:underline mt-4 block">
        ← Back to Tools
      </a>
    </main>
  );
}