const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: "Fleur de CBD Premium", price: "19.99€", image: "/images/cbd1.jpg", description: "Une fleur de CBD premium au goût intense." },
    { id: 2, name: "Huile de CBD 10%", price: "29.99€", image: "/images/cbd2.jpg", description: "Une huile de CBD pure et naturelle." },
    { id: 3, name: "Résine de CBD", price: "15.99€", image: "/images/cbd3.jpg", description: "Une résine de CBD pressée de haute qualité." }
];

// Route pour la page d'accueil
router.get('/', (req, res) => {
    res.render('pages/a-propos', { title: 'Accueil - CBD Shop',products:products });
});

module.exports = router;