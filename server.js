const express = require('express');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const path = require('path');

const app = express();

// Active LiveReload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/public"); // Surveille les fichiers dans "public"

app.use(connectLiveReload()); // Active LiveReload sur le serveur

app.set('view engine', 'ejs');
app.use(express.static('public')); // Fichiers statiques (CSS, JS, images)
app.set('views', path.join(__dirname, 'views')); // Définit le dossier contenant les fichiers EJS

const homeRoutes = require('./routes/home');
app.use('/', homeRoutes);

const productRoutes = require("./routes/product");
app.use("/fleurs-cbd", productRoutes);

const aProposRoutes = require("./routes/a-propos");
app.use("/a-propos", aProposRoutes);

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: "Contact" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

// Rafraîchir automatiquement le navigateur en cas de modification
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
