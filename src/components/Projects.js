import { useState } from "react";
import { Button } from "@/components";
import { useWindowSize } from "@/hooks";

export const Projects = () => {
  const windowSize = useWindowSize();
  const [expanded, setExpanded] = useState(false);

  // TODO: Replace this with the data from API.
  const projects = [
    {
      name: "Go SubscRide",
      primaryType: "Shopify Application",
      secondaryType: "Production",
      description: "",
      roles: "Fullstack Developer / Team Member",
      stacks: ["Node", "React", "GraphQL", "PostgresQL"],
      thumbnail: "",
      link: "",
    },
    {
      name: "Stripe Migration Application",
      primaryType: "Shopify Application",
      secondaryType: "Prototype",
      description: "",
      roles: "Fullstack Developer / Solo Member",
      stacks: ["Node", "React"],
      thumbnail: "",
    },
    {
      name: "mamoru.earth",
      primaryType: "Web Application",
      secondaryType: "Production",
      description: "",
      roles: "Frontend Developer / Team Member",
      stacks: ["React"],
      thumbnail: "",
    },
    {
      name: "BarcSnap",
      type: "Web Application",
      description: "Side Project / Discontinued",
      roles: "Fullstack Developer / Team Leader",
      stacks: ["Ruby on Rails"],
      thumbnail: "",
    },
  ]

  if (!expanded) {
    return (
    <div className="w-100 text-center mt-3">
      <Button onClick={() => setExpanded(true)}>
        {"Discover my projects"}
      </Button>
    </div>
  );
  }

  return (
    <div className={`${windowSize.containerClass} mt-3`}>
      <div className="w-100 border-bottom border-secondary">
        <h2 className="text--purple">{"PROJECTS"}</h2>
      </div>
      <div className="row">
        {projects.map((project, index) => {
          const {
            name,
            primaryType,
            secondaryType,
            description,
            roles,
            stacks,
            thumbnail,
            link,
          } = project;

          return (
            <div key={`project-${index}`} className="col-12 col-lg-6">
              <div className="card-container mt-3 p-3">
                <p>{name}</p>
                <p>{primaryType}</p>
                <p>{secondaryType}</p>
                <p>{description}</p>
                <p>{roles}</p>
                <p>{stacks}</p>
                <p>{thumbnail}</p>
                <p>{link}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
