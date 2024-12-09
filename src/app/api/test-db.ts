import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "pg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Create a new PostgreSQL client using the connection string
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // To allow the connection to Neon
    },
  });

  try {
    // Connect to the database
    await client.connect();

    // Perform a simple query to check the database (for example, a SELECT query)
    const result = await client.query("SELECT NOW()"); // Query to get the current timestamp from the database
    const currentTime = result.rows[0].now;

    // Respond with the result to indicate the database is accessible
    res
      .status(200)
      .json({ message: "Database connected successfully", currentTime });
  } catch (error) {
    // Handle errors if the connection fails
    res.status(500).json({ error: "Database connection failed" });
  } finally {
    // Close the database connection
    await client.end();
  }
}
