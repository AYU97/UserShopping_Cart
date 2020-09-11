const express = require('express')
const Product = require('../models/Product')
const Cart = require('../models/Cart')
const auth = require('../middleware/auth')
const router = express.Router()


router.post('/api/create-product',async (req, res) => {
    const product = new Product({
        ...req.body,
    })

    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.get('/api/get-all-products',async (req, res) => {
    try {
        const product = await Product.find({})
        if(!product){
            res.status(400).send("no products available yet,add them")
        }
        res.status(200).send(product)
           
    } catch (e) {
        res.status(500).send(e)
    }
})



router.post('/api/add-product-to-cart',auth,async (req, res) => {
  const productId = req.body.prodid

    try {
        const productToAdd = await Product.findById(productId)
        const prodName = productToAdd.name
        const prodDesc = productToAdd.description
        const prodPrice = productToAdd.price
        const prodMake = productToAdd.make
        if(!productToAdd){
            res.status(400).send("no product exists on this id, please re-check")
        }
        else {
            const cart = new Cart({
                name :prodName,
                description :prodDesc,
                price :prodPrice,
                make :prodMake,
                owner: req.user._id
            })
            await cart.save()
            res.status(201).send("product added to the cart")
        }
      
    } catch (e) {
        res.status(400).send(e)
    }
})


router.get('/api/user-cart',auth, async (req, res) => {
   
    try {
        const cart = await Cart.find({owner: req.user._id })

        if (!cart) {
           res.status(404).send("no cart found")
        }
        res.status(200).send(cart)
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router