import styles from "@/styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faSquarePhone,
  faHouseLaptop,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Contact = () => {
  const windowSize = useWindowSize();
  // TODO: Add website URL after the host name is confirmed.
  return (
    <>
      <div id="card-contact" className={`${styles.contact__background} bg-light-lilac`}>
        <div className={`${windowSize.containerClass} mt-3 mb-3 h-100`}>
          <div className="row h-100 d-flex justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <div className="d-flex">
                <div className={`${styles["contact__icon"]} d-flex justify-content-center`}>
                  <FontAwesomeIcon
                    icon={faSquareEnvelope}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="mailto:kochapas@outlook.com" className="mt-auto mb-auto text-decoration-none fs-5">
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
                <a href="https://www.linkedin.com/in/kochapas" target="_blank" className="mt-auto mb-auto text-decoration-none fs-5">
                  <p className="mt-auto mb-auto">
                    {"www.linkedin.com/in/kochapas"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faSquarePhone}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="tel:+818034446253" className="mt-auto mb-auto text-decoration-none fs-5">
                  <p className="mt-auto mb-auto">
                    {"+81 80 3444 6253"}
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="https://www.kochapas.dev"
                  className="mt-auto mb-auto text-decoration-none fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-auto mb-auto">
                    {"https://www.kochapas.dev"}
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
                  className="mt-auto mb-auto text-decoration-none fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-auto mb-auto">
                    {"www.github.com/kochapas"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faHouseLaptop}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a
                  className="mt-auto mb-auto text-decoration-none fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-auto mb-auto">
                    {"Hybrid / Remote"}
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
