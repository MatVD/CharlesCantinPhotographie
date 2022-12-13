import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo-charles-cantin.png";
import Insta from "../../public/Instagram.png";
import Facebook from "../../public/Facebook.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const router = useRouter();

  const links = [
    {
      href: "/",
      name: "Accueil",
    },
    {
      href: "/galerie",
      name: "Galerie",
    },
    {
      href: "/tarifs-presta",
      name: "Tarifs et prestations",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <header className={styles.header}>
      {/* La nav à un style par défaut, au clique styles.show est rajouté */}
      <nav className={`${styles.nav} ${navOpen ? styles.show : null}`}>
        <div className={styles.imageContainer}>
          <Link href="/">
            <div className={styles.logoContainer}>
              <Image src={Logo} fill priority alt="Logo" />
            </div>
          </Link>
          <div className={styles.socialContainer}>
            <Link href="/">
              <Image src={Facebook} width={24} height={24} alt="Facebook" />
            </Link>
            <Link href="/">
              <Image src={Insta} width={24} height={24} alt="Instagram" />
            </Link>
          </div>
        </div>
        <ul className={styles.ul}>
          {links.map((link, i) => (
            <li className={styles.li} key={i}>
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={link.href}
                className={
                  // si path == href alors isActive
                  router.pathname == link.href ? `${styles.linkUnderline}` : ""
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={styles.btnBurger}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className={styles.burgerBar}></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
