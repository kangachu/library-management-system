import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.review.deleteMany();
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.user.deleteMany();

  const sciFi = await prisma.genre.create({ data: { name: 'Science Fiction' } });
  const fantasy = await prisma.genre.create({ data: { name: 'Fantasy' } });
  const mystery = await prisma.genre.create({ data: { name: 'Mystery' } });
  const nonFiction = await prisma.genre.create({ data: { name: 'Non-Fiction' } });

  await prisma.book.createMany({
    data: [
      { title: 'Dune', author: 'Frank Herbert', isbn: '9780441013593', genreId: sciFi.id },
      { title: 'Neuromancer', author: 'William Gibson', isbn: '9780441569595', genreId: sciFi.id },
      { title: 'Foundation', author: 'Isaac Asimov', isbn: '9780553293357', genreId: sciFi.id },
      { title: 'Snow Crash', author: 'Neal Stephenson', isbn: '9780553380958', genreId: sciFi.id },
      { title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '9780547928227', genreId: fantasy.id },
      { title: 'The Name of the Wind', author: 'Patrick Rothfuss', isbn: '9780756404741', genreId: fantasy.id },
      { title: 'The Way of Kings', author: 'Brandon Sanderson', isbn: '9780765326355', genreId: fantasy.id },
      { title: 'A Game of Thrones', author: 'George R.R. Martin', isbn: '9780553103540', genreId: fantasy.id },
      { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', isbn: '9780307454546', genreId: mystery.id },
      { title: 'Gone Girl', author: 'Gillian Flynn', isbn: '9780307588371', genreId: mystery.id },
      { title: 'And Then There Were None', author: 'Agatha Christie', isbn: '9780062073488', genreId: mystery.id },
      { title: 'The Silent Patient', author: 'Alex Michaelides', isbn: '9781250301696', genreId: mystery.id },
      { title: 'Sapiens', author: 'Yuval Noah Harari', isbn: '9780062316097', genreId: nonFiction.id },
      { title: 'Atomic Habits', author: 'James Clear', isbn: '9780735211292', genreId: nonFiction.id },
      { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', isbn: '9780374533557', genreId: nonFiction.id },
      { title: 'Educated', author: 'Tara Westover', isbn: '9780399590504', genreId: nonFiction.id },
    ],
  });
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
