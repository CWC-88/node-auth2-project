const express = require('express')
const apiRouter = require('/Users/C/Desktop/node-auth2-project/api/apirouter.js')
const config = require('/Users/C/Desktop/node-auth2-project/api/apiconfig.js')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const userRouter = require('/Users/C/Desktop/node-auth2-project/users/router.js')




config(server)
server.use(helmet())
server.use(cors())
server.use(express.json())


server.use('/api', apiRouter,userRouter)
// server.use('/api/users')
server.use((err, req, res, next) => {
    console.log("Error: ", err)
    res.status(500).json({
      errorMessage: "Something went wrongasdfasdfa"
    })
  })

module.exports = server