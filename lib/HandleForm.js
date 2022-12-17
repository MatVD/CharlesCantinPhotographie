import emailjs from "@emailjs/browser";

const handleSubmit = async (event) => {
  event.preventDefault();

  // Toast info
  const formInfo = document.getElementById("formInfos");
  formInfo.innerText = "";

  // Récupération data du formulaire
  const data = {
    firstName: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value,
  };

  emailjs
    .send(
      "charles_cantin",
      "contact_form",
      data,
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
    )
    .then(
      (response) => {
        // Reset du form et ajout d'un toast "Message envoyé"
        if (response.status === 200) {
          event.target.name.value = "";
          event.target.email.value = "";
          event.target.message.value = "";
          formInfo.style.display = "flex";
          formInfo.append("Message envoyé");
          // Disparition du toast après 7 secondes
          setTimeout(() => {
            formInfo.style.display = "none";
          }, 7000);
        }
      },
      (err) => {
        alert("Une erreur est survenue. Veuillez envoyer de nouveau votre message s'il vous plaît");
      }
    );
};

export default handleSubmit;
