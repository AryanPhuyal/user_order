const EventEmitter = require('events');
const mongoose = require('mongoose')
const { MONGO_URI } = require('../config')


const mongooseEmitter = new EventEmitter();

// register listener
mongooseEmitter.on('connect', () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(success => mongooseEmitter.emit('success', success))
        .catch(error => mongooseEmitter.emit('error', error))
})

module.exports = mongooseEmitter