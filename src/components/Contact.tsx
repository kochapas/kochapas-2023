import styles from "@/styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "@/hooks/useWindowSize";

/**
 * Component for contact informations.
 * @returns Contact component.
 */
export const Contact = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div id="card-contact" className={`${styles.contact__background} bg-light-lilac`}>
        <div className={`${windowSize.containerClass} mt-3 mb-3 h-100`}>
          <div className="row h-100 d-flex justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <div className="d-flex">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faSquareEnvelope}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="mailto:kochapas@outlook.com" className="mt-auto mb-auto text-decoration-none">
                  <p className="mt-auto mb-auto">
                    {"kochapas@outlook.com"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="https://www.linkedin.com/in/kochapas" target="_blank" className="mt-auto mb-auto text-decoration-none">
                  <p className="mt-auto mb-auto">
                    {"www.linkedin.com/in/kochapas"}
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex mt-3 mt-lg-0">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="https://www.kochapas.dev"
                  className="mt-auto mb-auto text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-auto mb-auto">
                    {"www.kochapas.dev"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="https://www.github.com/kochapas"
                  className="mt-auto mb-auto text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-auto mb-auto">
                    {"www.github.com/kochapas"}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
