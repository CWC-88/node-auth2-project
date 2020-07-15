const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

  const token = req.headers.authorization; 

  if(token){
    const secret = process.env.JWT_SECRET || 'can i tell you something?'

    jwt.verify(token, secret, (error, decoded) => {
      if(error){
        res.status(401).json({ message: "invalid credentials"})
      } else {
        req.jwt = decoded;
        next()

      }
    })
  } else {
  res.status(400).json({ message: 'Provide proper info' })
  }
}