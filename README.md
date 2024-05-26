# GraphQL-Evaluation-FredChoco

## Description du projet
Nous avons créé un réseau social autour du thème de la kpop.
Les utilisateurs peuvent s'inscrire, se connecter, créer des articles, les lire,
les commenter, les liker ou disliker. Ils peuvent aussi modifier leur profil avec un
pseudonyme et une photo de profil.

## Technologies utilisées
- [Node.js](https://nodejs.org/en)
- [Vite](https://vitejs.dev/)
- [React](https://fr.react.dev/)
- [GraphQl](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)

## README
Je vous invite à lire dans un premier temps les README des différentes parties :
- [README Frontend](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/README.md)
- [README Backend](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/README.md)

## Lancement du projet globalement
**! Les commandes ont été essayées sur un environnement Windows !**

Tout en une seule commande (install / start-back / start-front).
- Installation de tous les packages frontend et backend
- Construction du frontend et du backend
- Démarrage du frontend et du backend en production

```bash
  npm run start
```

Installer les dépendances (frontend et backend)

```bash
  npm run setup
```


## Pages et fonctionnalités globales
### Connexion/Inscription
Créer un utilisateur

Se connecter

Se déconnecter


### Page d'accueil
Statistiques globales du site :
- Nombre d'articles
- Nombre de commentaires
- Nombre d'utilisateurs
- Taux d'appréciation des articles

Liste des articles récents (max 10)

### Page de profil
Informations de l'utilisateur :
- Photo de profil
- Pseudonyme
- Mail

Liste des articles de l'utilisateur

Liste des articles likés par l'utilisateur

Si l'utilisateur est connecté, il peut modifier son profil ainsi que créer, modifier ou supprimer un article.

### Page d'article
Affichage de l'article, avec titre, date de création, contenu, nombre de likes et dislikes, et zone de commentaires.
Un utilisateur connecté peut ajouter, modifier ou supprimer un commentaire.

### Page de recherche
Barre de recherche pour chercher un article par titre, contenu ou auteur.
Bouton de tri par popularité des articles.
