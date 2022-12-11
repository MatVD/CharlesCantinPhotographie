import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo-charles-cantin_s.svg"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${navOpen ? styles.show : null}`}>
        <div className={styles.imageContainer}>
          <Image
            src={Logo}
            fill
            priority
            alt="Logo"
          />
        </div>
        {/* La nav à un style par défaut, au clique styles.show est rajouté */}
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/">Accueil</Link>
            </li>
            <li className={styles.li}>
              <Link href="/galerie">Galerie</Link>
            </li>
            <li className={styles.li}>
              <Link href="/tarifs-presta">Tarifs et prestations</Link>
            </li>
            <li className={styles.li}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        <button className={styles.btnBurger} onClick={() => setNavOpen(!navOpen)}>
          <span className={styles.burgerBar}></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
