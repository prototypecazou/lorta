const express = require('express');
const router = express.Router();

// Route pour la page d'accueil
router.get('/', (req, res) => {
    res.render('pages/home', { title: 'Accueil - CBD Shop' });
});

module.exports = router;