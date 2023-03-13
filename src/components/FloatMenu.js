import { useState } from "react";
import styles from "@/styles/FloatMenu.module.css";
import { CircleFlag } from 'react-circle-flags'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export const FloatMenu = ({ children }) => {
  const supportedLanguage = ["jp", "us"];
  const defaultLanguage = "us";
  const selectedLanguage = defaultLanguage;

  return (
    <div className="">
      <div id={styles["float-menu"]} className="">
        <div className={`${styles["float-item"]} d-flex bg-lilac overflow-hidden mb-2 justify-content-end align-items-center`}>
          <a
            href="https://drive.google.com/file/d/1MxAOdkWBii9s1xjLn0H5tdAMQQ9HtqjK"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex text-nowrap text-decoration-none ms-3 me-2 pe-1"
          >
            <p className="m-0 me-3">Download my CV!</p>
            <FontAwesomeIcon
                icon={faFileArrowDown}
                size="2x"
                className=""
              />
          </a>
        </div>
        <div className={`${styles["float-item"]} d-flex bg-lilac overflow-hidden mb-2 justify-content-end align-items-center`}>
          {supportedLanguage.filter((lang) => lang !== selectedLanguage)
            .map((lang, index) =>
              <div key={`lang-${index}`} className="ms-1 me-1">
                <CircleFlag
                  countryCode={lang}
                  height="40"
                />
              </div>
            )
          }
          <div className="ms-1 me-1">
            <CircleFlag countryCode={selectedLanguage} height="40" />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
