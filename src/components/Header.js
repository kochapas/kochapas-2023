import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.header__background}>
        <div className={`${windowSize.containerClass} mb-3 pt-4`}>
          <div className="row">
            <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
              <Image
                alt="kochapas's picture"
                src="/assets/avatar.jpg"
                width={200}
                height={200}
                className="rounded-circle m-2 ms-0 mb-1"
              />
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="1x"
                  className="me-2 mt-1"
                />
                <p className="mb-0">{t("Header.location")}</p>
              </div>
            </div>
            <div className="col-12 col-lg-9 mt-2">
              <h1>{t("Header.name")}</h1>
              <h2>{t("Header.title")}</h2>
              <p className="mt-4 mb-2">{t("Header.description")}</p>
              <p>{t("Header.subDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
