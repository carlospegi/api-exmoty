import express from 'express'
import mongoose from 'mongoose'

// import products routes
import productsRouter from './routes/productsRoutes.js'


//------------------------------------------------
// DB connection
mongoose.connect(
    "mongodb://127.0.0.1:27017/apit"
).then(() => console.log("DB connection OK !"))
//------------------------------------------------


// app instance
const app =  express()

//route middleware
app.use( "/api/v2", productsRouter)
// server listening
app.listen(3000, ()=> console.log('server ok!'))

