# GraphQL-Evaluation-FredChoco
# BACKEND

## Technologies utilisées
- [Node.js](https://nodejs.org/en)
- [Vite](https://vitejs.dev/)
- [React](https://fr.react.dev/)
- [GraphQl](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Lancement du backend
Installer les dépendances

```bash
  npm install
```

Lancer le serveur en mode **Dev** [http://localhost:5009/graphql](http://localhost:5009/graphql)

```bash
  npm run dev
```

Lancer le serveur en mode **Prod** (compiler) [http://localhost:5009/graphql](http://localhost:5009/graphql)

```bash
  npm run start
```

**Note :** La plupart des requêtes sont sécurisées et nécessitent une authentification (explication ci-dessous dans **Authentification**). Si vous essayez d'exécuter une requête ou une mutation, vous risquez de rencontrer une erreur d'authentification.

⚠️ **.env** ⚠️  
Le fichier **.env** a été inclus dans le dépôt pour faciliter la remise.  
Cependant, habituellement, il est préférable de ne pas l'ajouter au dépôt.

## Explication de l'Architecture
Ci-dessous, une brève explication de l'architecture de notre backend. Nous avons décidé de l'organiser ainsi pour plus de simplicité et de maintenabilité.

Points importants :

- Dans le dossier **prisma**, tout ce qui concerne la base de données :
    - *migrations* regroupe toutes les migrations de la base de données.
    - *dev.db* est le fichier de base de données SQLite utilisé pour le développement.
    - *schema.prisma* est le fichier où nous définissons le schéma de notre base de données pour Prisma.

- Le dossier **uploads** représente l'endroit où toutes les images du site sont téléchargées (par exemple, les images d'un Post).

- Dans **models**, nous avons d'abord séparé les objets par rapport à la base de données (User/Post/Like/...). Ensuite, dans chaque dossier, il y a un dossier **mutations** (qui regroupe toutes les mutations du modèle) et un dossier **queries** (qui regroupe toutes les requêtes du modèle).

- Avec cette architecture, nous avons pu créer plusieurs fichiers *index.ts* qui exportent finalement toutes les requêtes et toutes les mutations de tous les modèles.

- Grâce à l'exportation globale, cela nous permet d'écrire le fichier [**resolvers.ts**](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/src/resolvers.ts) avec des importations automatiques.




## L'Architecture
- dist                       
- node_modules
- **prisma** 
    - *migrations*
    - *dev.db*
    - *schema.prisma*
- src
    - datasources
    - models
        - User
            - **mutations**
                - createUser.ts
                - deleteUser.ts
                - updateUser.ts
                - *index.ts*
            - **queries**
                - getUser.ts
                - getUserByUsername.ts
                - getUserInfo.ts
                - *index.ts*
            - *index.ts*
        - Post
        - Like
        - ...
    - modules
    - context.ts
    - index.ts
    - **resolvers.ts**
    - schema.ts 
    - types.ts
- **uploads**
- **.env**
- .gitignore
- codegen.ts
- package.json
- package-lock.json
- README.md
- tsconfig.json
- typings.d.ts 

### La base de données
- Le schéma de la base de données est disponible [ICI](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/prisma/schema.prisma)
![Alt "schema prisma"](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/illustration-readme/schemaPrisma.png?raw=true "schema prisma")

### selectorPrisma
Un fichier [**selectorPrisma**](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/src/models/selectorsPrisma.ts) a été créé. Il permet de mapper directement les objets afin de simplifier les différentes requêtes Prisma. (Un exemple d'utilisation est donné dans [**getPost.ts**](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/src/models/Post/queries/getPost.ts))


### Authentification
Une Authentification avec JWT a été faite comme vue en cours.  
De plus une Directive a été créer afin de bloquer les requêtes non authentifié.  
(Avec cela il suffit de rajouter **@auth** a la fin de la queries ou de la mutations dans le [**schema GraphQL**](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/src/schema.ts) pour la sécurisé)
  - [**auth.ts**](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/src/modules/auth.ts)
  - [**authDirective.ts**](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/src/modules/authDirective.ts)

### Codegen   
- Codegen a été utilisé pour générer tous les types du [**schema GraphQL**](https://github.com/EFREI-M1-Dev/GraphQL-Evaluation-FredChoco/blob/main/backend/src/schema.ts) utilisable dans l'application.
