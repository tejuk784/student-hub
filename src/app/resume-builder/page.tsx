import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResumeBuilderPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">AI Resume Builder</h1>
        <p className="mt-2 text-blue-200">
          Create a professional resume in minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="text-xl font-bold mb-2">Create New Resume</h2>
          <p className="text-gray-600 mb-4">
            Let AI build your resume from scratch.
          </p>
          <Button asChild className="w-full">
            <Link href="/resume-builder/create">Start Building</Link>
          </Button>
        </div>

        <div className="border rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">📝</div>
          <h2 className="text-xl font-bold mb-2">Improve Resume</h2>
          <p className="text-gray-600 mb-4">
            Upload and let AI improve your resume.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link href="/resume-builder/improve">Improve Resume</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}