import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <>
      <div className={styles.header__background}>
        <div className="container w-75 mb-3">
          <div className="row">
            <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
              <Image
                alt="kochapas's picture"
                src="/assets/avatar.jpg"
                width={160}
                height={160}
                className="rounded-circle m-2 ms-0 mb-1"
              />
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="1x"
                  className="me-2 mt-1"
                />
                <p>Tokyo, Japan</p>
              </div>
            </div>
            <div className="col-12 col-lg-9 mt-2">
              <div>
                <h1>
                  Kochapas Santibut (Allen)
                </h1>
              </div>
              <div>
                <h2>
                  Full-Stack Developer
                </h2>
              </div>
              <div>
                <p className="mb-1">
                  Experienced coder proficient in multiple programming languages since 2014.
                </p>
                <p>Originally from Bangkok, Thailand. Seeking opportunities to utilize my skills and expertise to enhance quality of life and promote workplace efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
