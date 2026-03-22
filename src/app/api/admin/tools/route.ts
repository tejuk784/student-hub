export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const tool = await db.tool.create({
      data: {
        name: body.name,
        category: body.category,
        description: body.description,
        websiteUrl: body.websiteUrl,
        isFeatured: body.isFeatured ?? false,
      },
    });
    return NextResponse.json(tool);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tools = await db.tool.findMany({
      orderBy: { name: "asc" },
    });
    return NextResponse.json(tools);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}