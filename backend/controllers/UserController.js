const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  // Check weather all the fields fill or not
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please fill all the required fields')
  }

  // Password must contain at least 6 characters
  if (password.length < 6) {
    res.status(400)
    throw new Error('Password must contain up at least 6 characters')
  }

  //Check weather user email already exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already Registered')
  }

  // Create a new User
  const user = await User.create({
    name,
    email,
    password,
  })
  if (user) {
    const { _id, name, email, photo, phone_no, bio } = user
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone_no,
      bio,
    })
  }
})

module.exports = { registerUser }
