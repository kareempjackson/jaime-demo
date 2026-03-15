import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding menu items...');

  const menuItems = [
    { name: 'Green Detox', priceCents: 799, category: 'Juice' },
    { name: 'Tropical Sunrise', priceCents: 849, category: 'Juice' },
    { name: 'Berry Blast', priceCents: 899, category: 'Smoothie' },
    { name: 'Mango Madness', priceCents: 849, category: 'Smoothie' },
    { name: 'Classic Lemonade', priceCents: 499, category: 'Lemonade' },
    { name: 'Ginger Shot', priceCents: 399, category: 'Shots' },
  ];

  for (const item of menuItems) {
    await prisma.menuItem.upsert({
      where: { id: item.name.toLowerCase().replace(/\s+/g, '-') },
      update: item,
      create: {
        id: item.name.toLowerCase().replace(/\s+/g, '-'),
        ...item,
      },
    });
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
