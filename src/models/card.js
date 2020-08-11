const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    front: {
      type: String,
      required: true
    },
    back: {
      type: String,
      required: true
    }
})

const cardBaseModel = mongoose.model('mycards', cardSchema)

exports.cardBaseModel = cardBaseModel