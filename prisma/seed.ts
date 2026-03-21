import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  await db.scholarship.createMany({
    data: [
      {
        title: "Google Generation Scholarship 2024",
        category: "SCHOLARSHIP",
        description: "Google is offering scholarships for CS students.",
        link: "https://buildyourfuture.withgoogle.com/scholarships",
      },
      {
        title: "Tata Scholarship 2024",
        category: "SCHOLARSHIP",
        description: "Tata Trusts offers scholarships for STEM students.",
        link: "https://www.tatatrusts.org/scholarships",
      },
      {
        title: "MIT Free AI Course 2024",
        category: "COURSE",
        description: "MIT free AI and Machine Learning track with 12 courses.",
        link: "https://ocw.mit.edu",
      },
    ],
  });

  await db.tool.createMany({
    data: [
      {
        name: "ChatGPT",
        category: "AI",
        description: "AI assistant by OpenAI for writing and coding.",
        websiteUrl: "https://chat.openai.com",
        isFeatured: true,
      },
      {
        name: "GitHub Copilot",
        category: "DEV",
        description: "AI pair programmer built into your editor.",
        websiteUrl: "https://github.com/features/copilot",
        isFeatured: true,
      },
      {
        name: "Figma",
        category: "PRODUCTIVITY",
        description: "Collaborative design tool for UI/UX.",
        websiteUrl: "https://figma.com",
        isFeatured: false,
      },
    ],
  });

  console.log("Seed data added!");
}

main()