const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const UserRoute = require('./routes/UserRoute.js')
const errorHandler = require('./middleware/errorMiddleware')

// initialize an instance of the Express application
const app = express()

// Middleware configuration
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Route configuration
app.get('/', (req, res) => {
  res.send('API is running!......')
})

// Error middleware
app.use(errorHandler)

// Routes Middlware
app.use('/api/users', UserRoute)

// Set up the PORT environment
const PORT = process.env.PORT || 8000

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
