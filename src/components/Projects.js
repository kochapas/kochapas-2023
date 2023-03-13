import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";
import { useWindowSize } from "@/hooks";
import styles from "@/styles/Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  const windowSize = useWindowSize();
  const [expanded, setExpanded] = useState(false);

  // TODO: Replace this with the data from API.
  const DEFAULT_IMG_SRC ="/assets/projects/default.jpg";
  const projects = [
    {
      name: "Go SubscRide",
      primaryType: "Shopify Application",
      secondaryType: "Production",
      description: "An application to help the merchant to manage customer's subscription contracts. Running on Shopify platform. I was working closely on this project to implement new features and maintaining the app while I was working with GO RIDE.",
      roles: "Fullstack Developer / Team Member",
      stacks: ["Node", "React", "GraphQL", "PostgresQL"],
      imgSrc: "/assets/projects/gosub.png",
      link: "https://apps.shopify.com/go-subscride",
    },
    {
      name: "Stripe Migration Application",
      primaryType: "Shopify Application",
      secondaryType: "Production",
      description: "An application to help merchant to migrate their customers' payment information from Stripe platform to Shopify platform. I create this custom application to help my team member from doing repetitive task during the store's migration process.",
      roles: "Fullstack Developer / Solo Member",
      stacks: ["Node", "React"],
      imgSrc: "/assets/projects/stripe.png",
    },
    {
      name: "mamoru.earth",
      primaryType: "Web Application",
      secondaryType: "Production",
      description: "An application that helps create sustainability and connect the business to their target consumer. I voluntarily work with them to make the world a better place for future generations.",
      roles: "Frontend Developer / Team Member",
      stacks: ["React"],
      imgSrc: "/assets/projects/mamoru.png",
      link: "https://app.mamoru.earth"
    },
    {
      name: "BarcSnap",
      primaryType: "Web Application",
      secondaryType: "Side Project / Discontinued",
      description: "An application I creates with my teammate during coding bootcamp. The goals of the application is to help foreigers who travel or lives in the other country where they can't read the local language. BarcSnap helping them by telling the detailed information of the product by just scanning the barcode without being able to read the product's name.",
      roles: "Fullstack Developer / Team Leader",
      stacks: ["Ruby on Rails", "PostgresQL"],
      imgSrc: "/assets/projects/barcsnap.png",
      link: "https://github.com/2tonepantone/barcsnap"
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
    <div className={`${windowSize.containerClass} ${expanded ? styles["projects-container--show"] : styles["projects-container--hide"]} mt-3`}>
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
            imgSrc,
            link,
          } = project;

          return (
            <div key={`project-${index}`} className="col-12 col-lg-6">
              <div className={`${styles["project__card"]} card-container mt-3 p-3`}>
                <div className={`${styles["card__image"]}`}>
                  <Image
                    alt={`${name}'s screenshot`}
                    src={imgSrc || DEFAULT_IMG_SRC}
                    width={480}
                    height={230}
                    className="w-100 h-auto pt-2 mb-3"
                  />
                </div>
                <div>
                  {(!!link) ?
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex text-decoration-none align-items-center"
                    >
                      <p className="fs-5 mb-0 me-2">{name}</p>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        size="1x"
                        className=""
                      />
                    </a>
                    : <p className="fs-5 mb-0">{name}</p>
                  }
                  {(!!primaryType || !!secondaryType) && <div>
                    <p className="badge bg-lilac rounded-pill m-0 me-2 text-black">{primaryType}</p>
                    <p className="badge bg-secondary rounded-pill m-0 w-auto">{secondaryType}</p>
                  </div>}
                </div>
                {(!!roles) && <p className="mt-2 mb-1">Roles: {roles}</p>}
                {(!!description) && <p className="mt-2 mb-1">{description}</p>}
                {(!!stacks) && <p className="mt-2 mb-1">Stacks: {stacks}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
