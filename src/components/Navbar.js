import Image from "next/image";
import styles from '@/styles/Navbar.module.css'

export const Navbar = ({children}) => {

  return (
    <>
      <div className={styles.navbar}>
        <div className="container d-flex justify-content-between">
          <div className={styles.navbar__avatar}>
            <Image
              src="/assets/parrot.jpg"
              alt="Navbar avatar"
              width="32"
              height="32"
              className="rounded-circle"
            />
          </div>
          <div className={styles.navbar__info}>
            <p className="m-auto me-2">X</p>
            <p className="m-auto me-2">X</p>
            <p className="m-auto me-2">X</p>
            <p className="m-auto me-2">X</p>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
