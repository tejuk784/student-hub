import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Student Hub
        </h1>
        <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
          Your one-stop platform for scholarships, AI resume builder, 
          and the best tech tools for students.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/resume-builder">Build My Resume</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
            <Link href="/news">Find Scholarships</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need to Succeed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-bold mb-2">AI Resume Builder</h3>
            <p className="text-gray-600 mb-4">
              Create a professional, ATS-optimized resume in minutes using GPT-4o AI.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/resume-builder">Get Started</Link>
            </Button>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-2">Scholarships & Courses</h3>
            <p className="text-gray-600 mb-4">
              Discover verified scholarships, free courses, and engineering opportunities.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/news">Explore Now</Link>
            </Button>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-2">Tech Tools Directory</h3>
            <p className="text-gray-600 mb-4">
              Find the best AI, dev, and productivity tools curated for students.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/tech-hub">Browse Tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}