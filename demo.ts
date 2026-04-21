// Random Demo - TypeScript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function generateRandomUser(): User {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  
  return {
    id: Math.floor(Math.random() * 1000),
    name: randomName,
    email: `${randomName.toLowerCase()}@example.com`,
    age: Math.floor(Math.random() * 50) + 18
  };
}

function displayUser(user: User): void {
  console.log(`User ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Age: ${user.age}`);
}

// Main execution
const randomUser = generateRandomUser();
displayUser(randomUser);
