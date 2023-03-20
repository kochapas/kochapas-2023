// IDK why would I need an API for this project.
// Create simple API to demonstrate how to call API from frontend.
export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `${req.method} allowed` });
    return;
  }

  // Assuming that this information was read from the DB.
  const skills = ["Node", "React", "JavaScript", "HTML", "CSS", "Express.js", "Next.js", "TypeScript", "Ruby on Rails", "C#", "VB.NET", "GraphQL", "PostgreSQL", "SQL Server", "Bootstrap", "Heroku", "Shopify", "Git", "GitHub", "GitHub Projects", "Trello", "Figmas"];
  res.status(200).json({ skills });
}
