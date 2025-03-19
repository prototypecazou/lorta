const express = require("express");
const router = express.Router();

// Exemple de produits (tu peux récupérer depuis ta BDD)
const products = [
    { id: 1, name: "Fleur de CBD Premium", price: "19.99€", image: "/images/cbd1.jpg", description: "Une fleur de CBD premium au goût intense." },
    { id: 2, name: "Huile de CBD 10%", price: "29.99€", image: "/images/cbd2.jpg", description: "Une huile de CBD pure et naturelle." },
    { id: 3, name: "Résine de CBD", price: "15.99€", image: "/images/cbd3.jpg", description: "Une résine de CBD pressée de haute qualité." }
];

// Route pour afficher un produit en fonction de son ID
router.get("/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (!product) {
        return res.status(404).send("Produit non trouvé !");
    }
    res.render("pages/product", { product,products:products });
});

module.exports = router;
