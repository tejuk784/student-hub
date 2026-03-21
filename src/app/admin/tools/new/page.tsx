"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewToolPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      category: formData.get("category"),
      description: formData.get("description"),
      websiteUrl: formData.get("websiteUrl"),
      isFeatured: formData.get("isFeatured") === "on",
    };
    await fetch("/api/admin/tools", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    router.push("/admin/tools");
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add New Tool</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input name="name" required className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="e.g. VS Code"/>
        </div>
        <div>
          <label className="text-sm font-medium">Category</label>
          <input name="category" required className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="e.g. Code Editor"/>
        </div>
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea name="description" required className="w-full border rounded-lg px-3 py-2 mt-1" rows={3} placeholder="Short description..."/>
        </div>
        <div>
          <label className="text-sm font-medium">Website URL</label>
          <input name="websiteUrl" type="url" required className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="https://..."/>
        </div>
        <div className="flex items-center gap-2">
          <input name="isFeatured" type="checkbox" id="isFeatured" className="w-4 h-4"/>
          <label htmlFor="isFeatured" className="text-sm font-medium">Featured Tool?</label>
        </div>
        <button type="submit" disabled={loading} className="bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50">
          {loading ? "Saving..." : "Add Tool"}
        </button>
      </form>
      <a href="/admin/tools" className="text-sm text-muted-foreground hover:underline mt-4 block">
        ← Back to Tools
      </a>
    </main>
  );
}