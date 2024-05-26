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
