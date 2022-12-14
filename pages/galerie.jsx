import client from "../lib/client";
import Image from "next/image";
import styles from "../styles/galerie.module.css";

export const getStaticProps = async () => {
  const galeries = await client.fetch(`*[_type == 'galerie'] {
    title,
    'images': image.asset->url,
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

const galerie = ({ galeries }) => {
  return (
    <>
      <h1>Galerie</h1>

      <section className={styles.section}>
        {galeries.map((galerie, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.images}
                src={galerie.images}
                width={294}
                height={197}
                alt={`Photo de votre ${galerie.title}`}
              />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.p}>{galerie.title}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default galerie;
