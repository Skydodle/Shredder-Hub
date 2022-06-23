const mongoose = require("mongoose");

let BoardSchema = new mongoose.Schema({

  name: String,
  sizes: String,
  price: String,
  thumbnail_url: String,
  photo_url: String,
  feature: String,
  descript_1: String,
  descript_2: String,
})

let Board = mongoose.model('Board', BoardSchema);

module.exports = Board;