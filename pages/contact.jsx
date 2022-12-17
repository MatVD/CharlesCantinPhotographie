import styles from "../styles/contact.module.css";
import Head from "next/head";
import handleSubmit from "../lib/HandleForm";

const contact = () => {

  return (
    <>
      <Head>
        <title>Contact - Charles Cantin - Photographe</title>
        <meta
          name="description"
          content="Bienvenue sur ma page de contact. Je vous répondrais très rapidement"
        />
      </Head>

      <h1>Contact</h1>

      <section className={styles.section}>
        <div className={styles.wrapperForm}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Nom et Prénom</label>
            <input
              type="text"
              id="name"
              required
              minLength={1}
              maxLength={50}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              pattern="[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})"
              required
              minLength={2}
              maxLength={60}
            />

            <label htmlFor="message">Message</label>
            <textarea type="text" id="message" required rows={9} maxLength={200}/>

            <button type="submit">Envoyer</button>
          </form>
        </div>
        <hr />
        <div className={styles.adress}>
          <p>Charles Cantin - Photographe</p>
          <p>85 rue du Sergent Limstack </p>
          <p>89650 Arrimay</p>
        </div>
      </section>
      <span id="formInfos" className={styles.formInfos}></span>
    </>
  );
};

export default contact;
