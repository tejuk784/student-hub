import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const scholarship = await db.scholarship.create({
      data: {
        title: body.title,
        category: body.category,
        description: body.description,
        link: body.link,
      },
    });

    return NextResponse.json(scholarship);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const scholarships = await db.scholarship.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(scholarships);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}