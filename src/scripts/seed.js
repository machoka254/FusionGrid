const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seed_data = require("./data/seed_data.json");
const { users } = seed_data;

// funtion definition
async function seed() {
  console.log("Seeding users...");

  // Loop through the users array and upsert each user
  await Promise.all(
    users.map(async (user) => {
      await prisma.user.upsert({
        where: { email: user.email }, // Check if the user with this email exists
        update: { ...user }, // If exists, update the user
        create: { ...user }, // If not exists, create a new user
      });
    })
  );

  console.log("Users have been seeded successfully.");
}

//function call
seed()
  .then(async () => {
    console.log("SEEDING COMPLETE\n");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
