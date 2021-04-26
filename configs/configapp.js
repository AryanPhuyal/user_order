const EventEmitter = require('events');
const express = require('express');
const { PORT } = require('../config')
const serverConfig = new EventEmitter()
const logger = require('./logger')

serverConfig.on('connect', () => {
    const app = express();
    app.listen(PORT, (err) => {
        if (!err) {
            logger.emit('log', __dirname, "index.js", `Server is running at Port ${PORT}`)
            serverConfig.emit('success', app)
        } else {
            logger.emit('error', __dirname, 'index.js', 'Server connection fail')
            serverConfig.err('error', err)
        }
    })
})

module.exports = serverConfig;