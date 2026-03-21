"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign in to Student Hub
        </h1>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full"
          >
            Sign in with Google
          </Button>
          <Button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            variant="outline"
            className="w-full"
          >
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}