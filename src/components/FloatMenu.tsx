import { useState, useEffect, PropsWithChildren } from "react";
import styles from "@/styles/FloatMenu.module.css";
import { CircleFlag } from 'react-circle-flags'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';

/**
 * Component for the float menu that floats on the bottom right of the screen.
 * @param children Children elements to render inside the main component.
 * @returns FloatMenu component.
 */
export const FloatMenu = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const supportedLanguage = ["jp", "th", "us"];
  const defaultLanguage = "us";
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  // Convert country code to language code.
  const languagePair: { [index: string]: string } = {
    us: "en",
    jp: "ja",
    th: "th",
  }

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(languagePair[lang]);
  }

  if (router.asPath.startsWith("/apps/")) {
    // Don't render the float menu if it is the custom apps page.
    return (
      <>
        {children}
      </>
    )
  }

  return (
    <>
      <div id={styles["float-menu"]} className="">
        <div className={`${styles["float-item"]} d-flex bg-lilac overflow-hidden mb-2 justify-content-end align-items-center`}>
          <a
            href="https://drive.google.com/file/d/1MxAOdkWBii9s1xjLn0H5tdAMQQ9HtqjK"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-nowrap text-decoration-none ms-3 me-2 pe-1"
          >
            <p className="m-0 me-3">{t("FloatMenu.cv.label")}</p>
            <FontAwesomeIcon
              icon={faFileArrowDown}
              size="2x"
            />
          </a>
        </div>
        <div className={`${styles["float-item"]} d-flex bg-lilac overflow-hidden mb-2 justify-content-end align-items-center`}>
          {/* First, render all other languages. */}
          {supportedLanguage.filter((lang) => lang !== selectedLanguage)
            .map((lang, index) =>
              <div
                key={`lang-${index}`}
                className="ms-1 me-1"
                onClick={() => {
                  handleLanguageChange(lang);
                }}
              >
                <CircleFlag
                  countryCode={lang}
                  height="40"
                />
              </div>
            )
          }
          {/* Render user's selected language. */}
          <div
            className="ms-1 me-1"
            onClick={() => {
              handleLanguageChange(selectedLanguage);
            }}
          >
            <CircleFlag countryCode={selectedLanguage} height="40" />
          </div>
        </div>
      </div>
      {children}
    </>
  )
}
