const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name: { type: String, lowercase: true }
})

module.exports = mongoose.model('category', CategorySchema)