----------------------------------------------------------------------------------------------------------------------------------
                                        Charles Cantin - Photographie
----------------------------------------------------------------------------------------------------------------------------------


----------------------------------------------------------------------------------------------------------------------------------
                                            Déployement en local



1) git clone https://github.com/MatVD/CharlesCantinPhotographie.git

2) "npm install" ou "yarn"
Afin de pouvoir déployer en local, il y a des variables d'environnement à récupérer pour des raisons de sécurité. Il faut donc créer un fichier .env.local dans le dossier source, puis copier-coller les variables qui sont énuméré dans la partie "Informations complémentaires" du modèle de copie de l'évaluation.

3) "npm run dev" ou "yarn run dev"



----------------------------------------------------------------------------------------------------------------------------------
                                          Déployement en ligne


L'application est déployer sur Vercel.com. Depuis cette plateforme, il est possible de connecter son projet depuis un repository (Github, gitlab..etc). Une fois le repo connecté, il y a quelques paramètres à remplir comme l'ajout des variables d'environnements par exemple. Ensuite, si le build est finalisé avec succès, l'application est disponible en https (donc avec SSL) depuis un sous-domaine .vercel.app.

Adresse de l'application :
https://charles-cantin-photographie.vercel.app/galerie

