// IDK why would I need an API for this project.

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data?: string[];
  error?: string;
}

// Create simple API to demonstrate how to call API from frontend.
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  ) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `${req.method} allowed` });
    return;
  }

  // Assuming that this information was read from the DB.
  const skills = ["Node", "React", "JavaScript", "HTML", "CSS", "Express.js", "Next.js", "TypeScript", "C#", "VB.NET", "Ruby on Rails", "SQL", "GraphQL", "PostgreSQL", "Bootstrap", "Agile", "Git", "GitHub", "GitHub Projects", "Shopify", "Heroku", "Figmas", "Trello"];
  res.status(200).json({ data: skills });
}
