require('dotenv').config()
const fs = require('fs')
const express = require('express');
const app = express()
const path = require('path')
const cors = require('cors');
const flightsRouter = require('./src/routes/flightRouter')

const PORT =  3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(process.env.PWD, 'public')))

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use('/', flightsRouter)

app.listen(PORT, () => {
  console.log(`started at ${PORT}`)
})
