export default function handler(req, res) {
  // Reception des données du contact form.
  const body = req.body

  // Vérification de la présence du nom et du mail
  if (!body.name || !body.email) {
    // Si non présent, erreur 400
    return res.status(400).json({ data: "Le nom ou l'email n'ont pas été trouvé"})
  }

  // Le nom et l'email ont été trouvé
  res.status(200).json({ data: `${body.name} ${body.email}` })
}