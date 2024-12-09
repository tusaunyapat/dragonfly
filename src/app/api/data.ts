import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../lib/db";

interface DataRow {
  id: number;
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await connectToDatabase();

    // Query the database
    const result = await client.query<DataRow>(
      "SELECT id, name FROM your_table"
    );

    // Send the data as a response
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
}
