const express = require('express');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const app = express();

// Active LiveReload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/public"); // Surveille les fichiers dans "public"

app.use(connectLiveReload()); // Active LiveReload sur le serveur

app.set('view engine', 'ejs');
app.use(express.static('public')); // Fichiers statiques (CSS, JS, images)

const homeRoutes = require('./routes/home');
app.use('/', homeRoutes);

const productRoutes = require("./routes/product");
app.use("/fleurs-cbd", productRoutes);


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
