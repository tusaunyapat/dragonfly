import { Client } from "pg";

// Create a new PostgreSQL client using the connection string
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Function to connect to the database
export async function connectToDatabase() {
  // Simply connect each time it's used, the pg client will handle it internally
  await client.connect();
  return client;
}
