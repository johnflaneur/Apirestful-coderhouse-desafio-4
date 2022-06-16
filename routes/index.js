const Contenedor = require("../Contenedor")
const express = require("express")
const router = express.Router();
const containerProducts = new Contenedor("./productos.txt");

containerProducts.save({title: "a", price: 1, thumbnail: "a(url)"})
containerProducts.save({title: "b", price: 2, thumbnail: "b(url)"})
containerProducts.save({title: "c", price: 3, thumbnail: "c(url)"})

router.get("/", (req, res)=>{
    res.json(containerProducts.getAll());
})

router.get("/:id", (req, res)=>{
    res.json(containerProducts.getById(Number(req.params.id)));
})

router.post("/", (req, res)=>{
    res.json(containerProducts.save(req.body))
})

router.put("/:id", (req, res)=>{
    res.json(containerProducts.saveById(Number(req.params.id), req.body));
})

router.delete("/:id", (req, res)=>{
    res.json(containerProducts.deleteById(Number(req.params.id)));
})

module.exports = router;