# My Todo List Application

Cette application est une simple liste de tâches à faire construite avec Node.js. Elle utilise Jest pour les tests et Docker pour le déploiement.

## Fonctionnalités

- Ajouter des tâches
- Supprimer des tâches
- Voir toutes les tâches

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 20)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## Fichiers principaux du projet

- **index.html** : La page HTML principale de l'application.
- **style.css** : Le fichier CSS pour le style de l'application.
- **script.js** : Le fichier JavaScript qui contient la logique l'application.
- **todo.test.js** : Ce fichier de test utilise Jest pour tester les fonctionnalités de l'application
- **Dockerfile** : Le fichier pour construire l'image Docker avec Nginx pour servir les fichiers statiques.
- **github/workflows/ci-cd.yml** : Le fichier de configuration GitHub Actions pour le pipeline CI/CD.


## Installation

## Clonez le dépôt sur votre machine locale :

bash
git clone https://github.com/votre_nom_d_utilisateur/my_todo_list.git
cd my_todo_list

## Initialisez un dépôt Git
git init

# Ajoutez tous les fichiers au dépôt
git add .

# Validez les fichiers ajoutés
git commit -m "Initial commit"

# Poussez les fichiers vers le dépôt GitHub
git push -u origin master

# Installez les dépendances :
npm install

# Exécution des Tests
npm test

# Construction de l'Image Docker
docker build -t my_todo_list_img . 

# exécuter un conteneur Docker basé sur l'image
docker run -p 8080:80 my_todo_list_img

# Accéder à l'Application** :
Ouvrez votre navigateur et accédez à http://localhost:8080

# Ajoutez les fichiers du workflow au suivi Git 
git add .github/workflows/ci-cd.yml

# Faites un commit avec un message descriptif 
git commit -m "Ajout CI/CD pipeline workflow"

# Poussez les fichiers vers le repository distant sur GitHub
git push origin master

# Assurer vous de Configurer les Secrets GitHub
Allez dans le repository sur GitHub.
Cliquez sur "Settings" puis "Secrets and variables" et "Actions".
Ajoutez les secrets nécessaires (DOCKER_HUB_USERNAME, DOCKER_HUB_PASSWORD)

# Vérifier le Pipeline CI/CD
Vérifiez que le pipeline CI/CD fonctionne 
Dans Docker Hub assurer vous que l'image est belle et bien poussée


