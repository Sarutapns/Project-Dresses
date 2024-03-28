require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const userRoute = require('./routes/user-route')
const dressesRoute = require('./routes/dresses-route')
const sizesRoute = require('./routes/sizes-route')
const rentRoute = require('./routes/rent-route')
const paymentRoute = require('./routes/payment-route')
const calenderRoute = require('./routes/calender-route')

const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute)
app.use(userRoute)
app.use(dressesRoute)
app.use(sizesRoute)
app.use(rentRoute)
app.use(paymentRoute)
app.use(calenderRoute)


// notFound
app.use( notFound )

// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))