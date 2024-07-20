const express = require('express');
const path = require('path');
const app = express();

const PORT = 80;

// Servir les fichiers statiques depuis le dossier app
app.use(express.static(path.join(__dirname, 'app')));

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
