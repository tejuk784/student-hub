import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const resumes = await db.resume.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, {session.user.name ?? "Student"}!
        </h1>
        <p className="mt-2 text-blue-200">
          Manage your resumes and saved content here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-blue-600">
            {resumes.length}
          </div>
          <div className="text-gray-600 mt-1">Resumes Created</div>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-green-600">0</div>
          <div className="text-gray-600 mt-1">Bookmarks</div>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-purple-600">0</div>
          <div className="text-gray-600 mt-1">Tools Saved</div>
        </div>
      </div>

      <div className="border rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">My Resumes</h2>
          <Button asChild size="sm">
            <Link href="/resume-builder/create">Create New</Link>
          </Button>
        </div>

        {resumes.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p>No resumes yet.</p>
            <Button asChild className="mt-4">
              <Link href="/resume-builder/create">
                Create Your First Resume
              </Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {resumes.map((resume: any) => (
              <div
                key={resume.id}
                className="flex justify-between items-center border rounded p-4"
              >
                <div>
                  <h3 className="font-semibold">{resume.title}</h3>
                  <p className="text-sm text-gray-500">
                    ATS Score: {resume.atsScore}%
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}