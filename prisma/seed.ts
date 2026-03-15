import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const ownerPinHash = await bcrypt.hash('1234', 10);
  const staffPinHash = await bcrypt.hash('5678', 10);

  const store = await prisma.store.upsert({
    where: { code: 'JUICE001' },
    update: {},
    create: {
      code: 'JUICE001',
      name: 'Fresh Squeeze Juice Bar',
    },
  });

  await prisma.staff.upsert({
    where: { id: 'owner-001' },
    update: {},
    create: {
      id: 'owner-001',
      store_id: store.id,
      name: 'Store Owner',
      pin_hash: ownerPinHash,
      is_owner: true,
      is_active: true,
    },
  });

  await prisma.staff.upsert({
    where: { id: 'staff-001' },
    update: {},
    create: {
      id: 'staff-001',
      store_id: store.id,
      name: 'John Barista',
      pin_hash: staffPinHash,
      is_owner: false,
      is_active: true,
    },
  });

  console.log('Seed data created successfully');
  console.log('Store code: JUICE001');
  console.log('Owner PIN: 1234');
  console.log('Staff PIN: 5678');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
