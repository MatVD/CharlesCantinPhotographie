import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>Logo et réseaux</div>
        <ul className={styles.ul}>
          <li className={styles.li}><Link href="/">Accueil</Link></li>
          <li className={styles.li}><Link href="/galerie">Galerie</Link></li>
          <li className={styles.li}><Link href="/tarifs-presta">Tarifs et prestations</Link></li>
          <li className={styles.li}><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar