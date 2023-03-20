import styles from "@/styles/Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      id={styles.footer}
      className="w-100 mt-4 pt-2 pb-2"
    >
      <a
        href="https://github.com/kochapas/kochapas-2023"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center text-decoration-none"
      >
        <FontAwesomeIcon
          icon={faGitAlt}
          size="2x"
          className="me-2"
        />
        <p className="m-0">{t("Footer.content")}</p>
      </a>
    </div>
  )
}
