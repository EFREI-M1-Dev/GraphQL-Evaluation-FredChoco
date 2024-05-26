# GraphQL-Evaluation-FredChoco
# FRONTEND

## Technologies utilisées
- [Node.js](https://nodejs.org/en)
- [Vite](https://vitejs.dev/)
- [React](https://fr.react.dev/)
- [GraphQl](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)

## Lancement du frontend
Installer les dépendances

```bash
  npm install
```

Lancer le serveur en mode **Dev** [http://localhost:5173/](http://localhost:5173/)

```bash
  npm run dev
```

Lancer le serveur en mode **Prod** (compiler) [http://localhost:5008/](http://localhost:5008/)

```bash
  npm run start
```

## Explication de l'Architecture
Ci-dessous, une brève explication de l'architecture de notre frontend. Nous avons décidé de l'organiser ainsi pour plus de simplicité et de maintenabilité.

Points importants :

- Dans le dossier **components**, c'est ici que l'on met tous les composants React qui vont nous permettre de créer nos différentes pages :
    - *_<NomDuComposant>.module.scss* : ce fichier contient le style spécifique au composant.
    - *<NomDuComposant>.tsx* : représente le composant React.

- Le dossier **controller** représente l'endroit où tous les contrôleurs sont rangés. Ici, il y a un controllerMain.ts qui contient une instance de chaque autre contrôleur, comme le controllerNotification.

- Dans **pages**, cela représente les différentes pages du site, comme la page Home ou la page Login. Dans la même logique que les composants, chaque dossier contient un fichier **.tsx** et un fichier **.scss** qui représentent la page et son style affilié.

- Dans **provider** se trouvent 2 fichiers qui vont être utilisés pour créer des providers dans *main.tsx* :
    - **ApolloClient.ts** : représente et crée une instance pour la connexion avec notre backend ApolloServer.
    - **AuthContext.ts** : permet de gérer globalement l'authentification, avec des commandes comme login / logout ou les différentes variables comme le *currentUser* qui représente l'utilisateur actuellement connecté.

- Dans **styles**, on retrouve les styles globaux de l'application, comme les couleurs. Ces styles globaux sont réutilisés dans les différents fichiers *.scss*. Cela permet de ne définir qu'une seule fois les couleurs de l'application et donc, en cas de besoin de modification, de le faire à un seul endroit.

- Le fichier **codegen.ts** permet de faire une liaison avec le backend afin de générer les différents types. Ces types sont générés dans le dossier **types**.

- Le fichier **main.tsx** représente la base de l'application avec un routeur qui permet de rediriger vers les différentes pages, mais aussi l'initialisation des différents providers (auth / apollo / controller).

- Le fichier **App.tsx** représente la structure de l'application. Il renvoie le composant donné par le routeur et en plus, il englobe celui-ci avec le header, le footer et les pop-ups pour les notifications. Cela permet de ne pas définir le header, etc., plusieurs fois dans chaque page.



## L'Architecture
- dist                       
- node_modules
- public
- src
    - assets
    - **components**
        - Button
            - *_Button.module.scss*
            - *Button.tsx*
        - CardArticle
        - Carousel
        - Comment
        - ...
    - **controller**
        - controllerMain.ts 
        - controllerNotification.ts
    - **pages**
        - createPost
        - error
        - home
            - _Home.module.scss
            - Home.tsx
        - login
        - ...
    - **provider**
        - ApolloClient.ts
        - AuthContext.tsx
    - **styles**
        - fonts
        - main.scss
        - _variables.scss
    - **types**
    - **App.tsx**
    - **main.tsx**
- index.html
- **codegen.ts**
- .gitignore
- package.json
- package-lock.json
- README.md
- tsconfig.json
- vite.config.ts

## Quelques images de l'application en fonction des différentes fonctionnalités

### La page d'acceuil "Home page" :
Sur cette page, on retrouve tout d'abord différentes statistiques du site. Ensuite, on trouve les 10 derniers articles postés sur l'application.
![Alt "Home page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/homePageLatestPost.png?raw=true "Home page")

### La page de connexion "Login page" :
Sur cette page de connexion,on retrouve seulement deux champs de saisie et un bouton. Les deux champs sont pour le *nom d'utilisateur* (username) et le *mot de passe* (password).
![Alt "Login page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/loginPage.png?raw=true "Login page")

### La page d'inscription "Sign up page" :
Sur cette page d'inscription,on retrouve quatres champs de saisie et un bouton. Les deux champs sont pour le *nom d'utilisateur* (username) et *l'email* (Email). Puis deux champs pour le *mot de passe*(password) et la c*onfirmation du mot de passe* (Confirm password) 
![Alt "Sign up page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/createPage.png?raw=true "Sign up page")

### La page de recherche  VIDE "Search empty" :
Sur cette page de recherche, il est possible de rechercher un article. On y trouve un simple champ de saisie qui permet de lancer la recherche.  
La recherche cherche dans :
- Le titre de l'article
- Le contenu de l'article
- Le créateur (auteur) de l'article

![Alt "Search empty"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/searchEmpty.png?raw=true "Search empty")

### La page de recherche "E" "Search lettre E" :
Voici la page de recherche avec une recherche de la lettre 'e' et l'affichage des résultats.
![Alt "Search E"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/searchLettreE.png?raw=true "Search E")

### La page de recherche "E" triée par popularit" "Search popularity" :
Voici la page de recherche avec une recherche de la lettre 'e' et l'affichage des résultats. Cependant, **l'option 'popularité' a été activée**. Les articles sont donc triés du plus populaire au moins populaire.

![Alt "Search popularity"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/searchPopularityActiv.png?raw=true "Search popularity")

### La page d'un Post "Post Page":
Sur cette page, on retrouve toutes les informations d'un article :
- Image
- Nombre de likes
- Nombre de dislikes
- Titre
- Contenu
- Date de création
- Nombre de commentaires
- Liste des commentaires

![Alt "Post page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/unPost.png?raw=true "Post page")

### La section modification commentaire "Edit comment":
Sur la même page d'un article, il est possible de modifier un de ses commentaires en étant connecté.
![Alt "Edit comment"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/editComment.png?raw=true "Edit comment")

### La page de profile "Profil Page":
Sur cette page, on retrouve toutes les informations liées à l'utilisateur connecté.

Dans un premier temps, se trouvent ses informations personnelles (avec la possibilité de les modifier) :
- Image de profil
- Nom d'utilisateur (username)
- Email

Puis l'utilisateur retrouve la liste de ses articles dans un carrousel avec la possibilité de modifier ou supprimer les articles.

Enfin, il retrouve un carrousel avec les différents articles qu'il a aimés.

![Alt "Profil page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/profilPage.png?raw=true "Profil page")

### La page de profile d'un autre utilisateur "Profil Page":
Sur cette page, on retrouve toutes les même informations liées à l'utilisateur choisi.

![Alt "Profil page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/profileNotMy.png?raw=true "Profil page")

### La page modification de profile "Edit profil Page":
Sur cette page, on retrouve un formulaire qui permet la modification des informations du profil.
On peut modifier le nom d'utilisateur, l'email et la photo de profil.
![Alt "Edit Profil page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/editAccount.png?raw=true "Edit Profil page")


### La page création d'un Article "Create Post Page":
Sur cette page, on retrouve un formulaire qui permet l'ajout d'un article avec un titre, un contenu et une image d'illustration.
![Alt "Create Post Page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/createPost.png?raw=true "Create Post Page")

### La page modification d'un Article "Edit Post Page":
Sur cette page, on retrouve toutes les informations de l'article avec la possibilité de modifier chaque champ.
![Alt "Edit Post Page"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/editPost.png?raw=true "Edit Post Page")

### La carte d'un Article par defaut "Card Post":
Cette carte représente les informations d'un article, avec la photo d'illustration, le titre, le créateur, ainsi que le nombre de likes et de dislikes.
![Alt "Card post"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/cardPost.png?raw=true "Card Post")


### La carte d'un de nos Article  "Card My Post":
Cette carte représente de la même façon les informations d'un article, mais elle permet en plus, si l'article appartient à la personne connectée (donc si c'est l'auteur de l'article), de supprimer ou de modifier l'article.
![Alt "Card My Post"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/cardMyPost.png?raw=true "Card My Post")


### Le Footer des pages  "Footer":
Dans le pied de page, on retrouve le lien du GitHub des deux meilleurs créateurs de ce site web [@Chocolatiines](https://github.com/Chocolatiines) et [@Fredray-21](https://github.com/Fredray-21).  
De plus, on retrouve le lien du dernier commit du repository du projet.
![Alt "Footer"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/footer.png?raw=true "Footer")

### Le Button "random" dans le header "Btn Random":
Dans l'en-tête, se trouve un bouton [RANDOM] qui permet d'arriver directement sur un article au hasard.
![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/btnRandom.png?raw=true "Btn Random")


## La Gestion des Formulaires et les notifications

Dans cette section, on retrouve différentes images qui illustrent la gestion des erreurs et des réussites avec diverses notifications.

### ERREUR ET WARNING :
![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/invalidPasswordError.png?raw=true "Btn Random")

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/likeError.png?raw=true "Btn Random")

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/dislikeError.png?raw=true "Btn Random")

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/postCommentError.png?raw=true "Btn Random")

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/pwdNotMatch.png?raw=true "Btn Random")

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/allInputsError.png?raw=true "Btn Random")

### SUCCESS :

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/loginSuccess.png?raw=true "Btn Random")

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/logoutSuccess.png?raw=true "Btn Random")

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/editCommentSuccess.png?raw=true "Btn Random")

![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/addPostSuccess.png?raw=true "Btn Random")


![Alt "Btn Random"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/frontend/illustration-readme/notif/addPostSuccess.png?raw=true "Btn Random")
