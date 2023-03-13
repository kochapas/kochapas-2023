import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";
import { useWindowSize } from "@/hooks";
import styles from "@/styles/Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const [expanded, setExpanded] = useState(false);

  const DEFAULT_IMG_SRC ="/assets/projects/default.jpg";
  const projects = ["goSub", "stripe", "mamoru", "barcSnap"];

  if (!expanded) {
    return (
    <div className="w-100 text-center mt-3">
      <Button onClick={() => setExpanded(true)}>
        {t(`Project.cta`)}
      </Button>
    </div>
  );
  }

  return (
    <div className={`${windowSize.containerClass} ${expanded ? styles["projects-container--show"] : styles["projects-container--hide"]} mt-3`}>
      <div className="w-100 border-bottom border-secondary">
        <h2 className="text--purple">{t(`Project.title`)}</h2>
      </div>
      <div className="row">
        {projects.map((project, index) => {
          const name = t(`Project.${project}.name`);
          const primaryType = t(`Project.${project}.primaryType`);
          const secondaryType = t(`Project.${project}.secondaryType`);
          const description = t(`Project.${project}.description`);
          const roles = t(`Project.${project}.roles`)?.split(",") || [];
          const stacks = t(`Project.${project}.stacks`)?.split(",") || [];
          const imgSrc = t(`Project.${project}.imgSrc`);
          const url = t(`Project.${project}.url`);

          return (
            <div key={`project-${index}`} className="col-12 col-lg-6">
              <div className={`${styles["project__card"]} card-container mt-3 p-3`}>
                <Image
                  alt={`${name}'s screenshot`}
                  src={imgSrc || DEFAULT_IMG_SRC}
                  width={480}
                  height={230}
                  className="w-100 h-auto pt-2 mb-3"
                />
                <div>
                  {(!!url) ?
                    <a
                      href={url}
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
                {(!!roles?.length) &&
                  <div className="mt-2 mb-1">
                    {roles?.map((role,index) =>
                      <p
                        key={`role-${index}`}
                        className="badge bg-lilac rounded-pill mb-0 me-2 text-black"
                      >
                        {role}
                      </p>
                    )}
                  </div>
                }
                {(!!description) && <p className="mt-2 mb-1">{description}</p>}
                {(!!stacks?.length) &&
                  <div className="mt-2 mb-1">
                    {stacks?.map((stack,index) =>
                      <p
                        key={`stack-${index}`}
                        className="badge bg-info rounded-pill mb-0 me-2"
                      >
                        {stack}
                      </p>
                    )}
                  </div>
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
