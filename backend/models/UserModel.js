const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: 'String',
      required: true,
    },
    email: {
      type: 'String',
      required: true,
      unique: true,
    },
    password: {
      type: 'String',
      required: true,
    },
    photo: {
      type: 'String',
      required: true,
    },
    phone_no: {
      type: 'String',
      default: '+94 770 334 287',
    },
    bio: {
      type: 'String',
      default: 'bio of profile',
    },
  },
  {
    timeStamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
