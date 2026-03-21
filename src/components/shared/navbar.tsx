"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Student Hub
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/news">Scholarships</Link>
        <Link href="/resume-builder">Resume</Link>
        <Link href="/tech-hub">Tools</Link>
        {session ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <Button
              onClick={() => signOut({ callbackUrl: "/" })}
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-blue-800"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <Button asChild size="sm" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/login">Sign In</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}