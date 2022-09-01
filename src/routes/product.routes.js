const { Router } = require("express")
const router = Router()
let { process,productEdit, edit, productDetail, finder, productCart, productCreateDetail, productDelete, destroy } = require('../controllers/product.controller');
const middlewareEdicion = require('../middlewares/edicion')
const middlewareProductCreate = require('../middlewares/productCreate')
const isLogged = require('../middlewares/isLogged')
const isAdmin = require('../middlewares/isAdmin')

// finder
router.get("/products/finder", finder)

// product create
router.get("/products/create/details",productCreateDetail)
router.post('/products/save',[middlewareProductCreate],process) 

// carrito
router.get("/carrito",[isLogged],productCart) 

// product edit
router.get("/products/edit/:id",[isAdmin], productEdit)
router.put('/products/editForm/:id',[middlewareEdicion],edit)

// product detail
router.get("/products/:id", productDetail)

//product delete
router.get('/products/productDelete/:id',[isAdmin], productDelete) 
router.delete('/delete/:id',[isAdmin],destroy) 


module.exports = router