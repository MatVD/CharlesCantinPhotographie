import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Accueil - Charles Cantin - Photographe</title>
      <meta name="description" content="Bienvenue sur mon site. Retrouvez-y toutes mes photos, prestations et tarifs." />
    </Head>

      <div className={styles.wrapperH1}>
        <h1 className={styles.h1}>Charles Cantin - Photographe</h1>
      </div>
    </>
  );
}
