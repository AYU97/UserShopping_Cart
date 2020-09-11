const express = require('express')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')


const app = express()
require('./db/db')

const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(productRouter)




app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})