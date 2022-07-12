const { Router } = require("express")
const router = Router()
let { productSave, productDetail, productSearch, productCart, productCreate, productCreateDetail } = require('../controllers/product.controller');
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({ storage: storage('products') });

router.get("/finder", productSearch)
router.get("/products/create", productCreate)
router.get("/products/create/details", productCreateDetail)
router.get("/products/:id", productDetail)
router.post("/products", [upload.any()], productSave)
router.get("/carrito", productCart)

//app.get('/edit', (req, res) => res.render(path.join(__dirname, '/views/products/edit.ejs')));
//app.get('/create/product', (req, res) => res.render(path.join(__dirname, '/views/products/createProduct.ejs')));
// app.get('/edit', (req, res) => res.render(path.join(__dirname, '/views/products/edit.ejs')));
// app.get('/create/product', (req, res) => res.render(path.join(__dirname, '/views/products/createProduct.ejs')));

module.exports = router