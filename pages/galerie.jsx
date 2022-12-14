import client from "../lib/client";
import Image from "next/image";
import styles from "../styles/galerie.module.css";
import Filter from "../components/filter/Filter";
import { useState } from "react";
import Head from "next/head";

export const getStaticProps = async () => {
  const galeries = await client.fetch(`*[_type == 'galerie'] {
    title,
    'images': image[].asset->url,
  }`);

  if (!galeries) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      galeries,
    },
  };
};

const Galerie = ({ galeries }) => {
  const [categories, setCategories] = useState(galeries);

  // Fonction pour le filtre
  const handleChange = (e) => {
    // Reset de l'ensemble des categories
    const categories = galeries;

    // Si l'utilisateur clique sur Filtre ou Toutes les catégories, tout est affiché
    if (e.target.value === "Tous" || e.target.value === "filtre") {
      setCategories(categories);
      return;
    }

    // Filtre
    const category = categories.filter(
      (category) => category.title.toLowerCase() == e.target.value.toLowerCase()
    );
    setCategories(category);
  };

  return (
    <>
      <Head>
        <title>Galerie - Charles Cantin - Photographe</title>
        <meta
          name="description"
          content="Bienvenue dans ma galerie. Prenez le temps de regarder mon travail et d'utiliser le filtre afin de rapidement trouver ce qui vous intéresse"
        />
      </Head>

      <h1>Galerie</h1>

      <section className={styles.section}>
        <Filter onChange={(e) => handleChange(e)} />

        <div className={styles.wrapperGalerie}>
          {categories.map((galerie, i) =>
            galerie.images.map((image, i) => (
              <div className={styles.card} key={i}>
                <Image
                  className={styles.images}
                  src={image}
                  width={294}
                  height={197}
                  alt={`Photo de votre ${galerie.title}`}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Galerie;
