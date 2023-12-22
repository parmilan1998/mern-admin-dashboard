const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

// initialize an instance of the Express application
const app = express()

// Middleware configuration
app.use(express.json())
app.use(bodyParser.json())

// Route configuration
app.get('/', (req, res) => {
  res.send('Home Page!...')
})

// Set up the PORT environment
const PORT = process.env.PORT

// Connect the mongodb database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running successfully on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log('Try again, ', error)
  })
