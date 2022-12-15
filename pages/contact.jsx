import styles from "../styles/contact.module.css";

const contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Toast info
    const formInfo = document.getElementById("formInfos");
    formInfo.innerText = ""

    // Récupération data du formulaire
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    // Envoie des datas
    const JSONdata = JSON.stringify(data);

    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    });

    // Reset du form et ajout d'un toast "Message envoyé"
    if (response.status === 200) {
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
      formInfo.style.display = "flex";
      formInfo.append("Message envoyé");
      setTimeout(() => {
        formInfo.style.display = "none";
      }, 7000);
    }
    
    
    
    const result = await response.json();
  };

  return (
    <>
      <h1>Contact</h1>

      <section className={styles.section}>
        <div className={styles.wrapperForm}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Nom et Prénom</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              pattern="[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea type="text" id="message" required rows={9} />

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
