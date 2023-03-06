import styles from "@/styles/Header.module.css"
import Image from "next/image"
export const Header = () => {
  return (
    <>
      <div className={styles.header__background} />
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="w-25">
            <Image
              alt="kochapas's picture"
              src="/assets/parrot.jpg"
              width={120}
              height={120}
              className="mt-4"
            />
          </div>
          <div className="w-75 mt-2">
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
    </>
  );
}
