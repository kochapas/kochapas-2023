import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { useScrollLocation } from "@/hooks/useScrollLocation";

export const Navbar = ({children}) => {
  const scrollLocation = useScrollLocation();
  const [navbarClass, setNavbarClass] = useState(styles["navbar--hidden"]);

  useEffect(() => {
    // Check if user scolled pass the contact information, if so, show navbar.
    const targetRect = document?.getElementById("card-contact")?.getBoundingClientRect();
    if (targetRect && (targetRect.y + targetRect.height < 0)) {
      setNavbarClass(styles["navbar--show"]);
    } else {
      setNavbarClass(styles["navbar--hidden"]);
    }
  }, [scrollLocation])

  return (
    <>
      <div id={styles.navbar} className={navbarClass}>
        <div className="container d-flex justify-content-between">
          <div
            className={styles.navbar__avatar}
            onClick={() => {
              window.location = "#"
            }}
          >
            <Image
              src="/assets/avatar.jpg"
              alt="Navbar avatar"
              width="32"
              height="32"
              className="rounded-circle"
            />
          </div>
          <div className={styles.navbar__info}>
            <a href="mailto:kochapas@outlook.com">
              <FontAwesomeIcon
                icon={faSquareEnvelope}
                size="2x"
                className="me-2"
              />
            </a>
            <a href="tel:+818034446253">
              <FontAwesomeIcon
                icon={faSquarePhone}
                size="2x"
                className="me-2"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kochapas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="me-2"
              />
            </a>
            <a
              href="https://www.github.com/kochapas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="2x"
                className="me-2"
              />
            </a>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
