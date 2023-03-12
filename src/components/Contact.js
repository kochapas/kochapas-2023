import styles from "@/styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <div className={`${styles.contact__background} bg-lilac`}>
        <div className="container w-75 h-100">
          <div className="h-100 d-flex justify-content-between align-items-center">
            <div className="w-50">
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  size="2x"
                  className="me-3"
                />
                <a href="mailto:kochapas@outlook.com" className="mt-auto mb-auto link--plain">
                  <p className="mt-auto mb-auto">
                    {"kochapas@outlook.com"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="me-3"
                />
                <a href="https://www.linkedin.com/in/kochapas" target="_blank" className="mt-auto mb-auto link--plain">
                  <p className="mt-auto mb-auto">
                    {"linkedin.com/in/kochapas"}
                  </p>
                </a>
              </div>
            </div>
            <div className="w-50">
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faSquarePhone}
                  size="2x"
                  className="me-3"
                />
                <a href="tel:+818034446253" className="mt-auto mb-auto link--plain">
                  <p className="mt-auto mb-auto">
                    {"+81 80 3444 6253"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  size="2x"
                  className="me-3"
                />
                <a href="https://www.github.com/kochapas" target="_blank" className="mt-auto mb-auto link--plain">
                  <p className="mt-auto mb-auto">
                    {"github.com/kochapas"}
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
