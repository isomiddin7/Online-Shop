import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Online Shop',
    })
})
 
router.get('/products', (req, res) => {
    res.render('products', {
        title: "Products",
        isProducts: true,
    })
 })
 
router.get('/add', (req, res) => {
    res.render('add', {
        title: "Add products",
        isAdd: true,
     })
})

export default router;