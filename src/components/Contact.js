import styles from "@/styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <div className={styles.contact__background}>
        <div className="container w-75 h-100">
          <div className="h-100 d-flex justify-content-between align-items-center">
            <div className="w-50">
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  size="2x"
                  className="me-2"
                />
                <p className="mt-auto mb-auto">
                  {"kochapas@outlook.com"}
                </p>
              </div>
              <div className="d-flex mt-3">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="me-2"
                />
                <p className="mt-auto mb-auto">
                  {"linkedin.com/in/kochapas"}
                </p>
              </div>
            </div>
            <div className="w-50">
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faSquarePhone}
                  size="2x"
                  className="me-2"
                />
                <p className="mt-auto mb-auto">
                  {"+81 80 3444 6253"}
                </p>
              </div>
              <div className="d-flex mt-3">
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  size="2x"
                  className="me-2"
                />
                <p className="mt-auto mb-auto">
                  {"github.com/kochapas"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
