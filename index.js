const server = require('./server.js')
require('dotenv').config()

const port = process.env.PORT || 5000

server.listen(port, (req, res) => {
    console.log(`\n Listening on port ${port} \n`)
})