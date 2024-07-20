# Utiliser l'image officielle de Node.js
FROM node:alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json ./
COPY jest.config.js ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application et les tests
COPY app ./app
COPY test ./test
COPY server.js ./

# Exposer le port 80
EXPOSE 80

# Démarrer l'application
CMD ["node", "server.js"]
