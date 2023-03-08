import Image from "next/image";
import styles from "@/styles/Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({children}) => {
  console.log("Navbar ==>", {  });
  return (
    <>
      <div id={styles.navbar}>
        <div className="container d-flex justify-content-between">
          <div className={styles.navbar__avatar}>
            <Image
              src="/assets/parrot.jpg"
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
            <a href="https://www.linkedin.com/in/kochapas" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="me-2"
              />
            </a>
            <a href="https://www.github.com/kochapas" target="_blank">
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
