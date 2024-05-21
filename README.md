# GraphQL-Evaluation-FredChoco


## Lancement du projet
Installer les dépendances

```bash
  npm run setup
```

Lancer le serveur

```bash
  npm run start
```

## Pages

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