import styles from "../styles/presta.module.css";
import client from "../lib/client";

export const getStaticProps = async () => {
  const prestas = await client.fetch(`*[_type == 'price-services'] {
    title,
    price,
    description
  }`);

  if (!prestas) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      prestas,
    },
  };
};

const tarifsPresta = ({ prestas }) => {
  return (
    <>
      <Head>
        <title>Tarifs et prestations - Charles Cantin - Photographe</title>
        <meta
          name="description"
          content="Sur cette page, retrouvez mes prestations et tarifs associés. Pour des commandes plus spécifiques, je serais ravis de pouvoir y répondre alors n'ésitez pas à me contacter"
        />
      </Head>

      <h1>Tarifs et prestations</h1>

      <section className={styles.section}>
        {prestas.map((presta, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.textWrapper}>
              <p className={styles.p}>{presta.title}</p>
            </div>
            <div className={styles.descWrapper}>
              <p>{presta.description}</p>
              <span>{presta.price}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default tarifsPresta;
