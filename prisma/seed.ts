import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: "admin",
      name: "Admin",
      courses: {
        create: [
          {
            title: "Introduction to Angular",
            description: "Learn Angular basics",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
