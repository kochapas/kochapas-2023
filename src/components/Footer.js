import styles from "@/styles/Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div id={styles.footer} className="w-100 mt-4 pt-2 pb-2 d-flex align-items-center justify-content-center">
      <a href="https://github.com/kochapas/kochapas-2023" target="_blank">
        <FontAwesomeIcon
          icon={faGitAlt}
          size="2x"
          className="me-2"
        />
      </a>
      <p className="m-0">{"Made with React"}</p>
    </div>
  )
}
