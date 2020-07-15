const jwt = require('jsonwebtoken')

function newtoken(user){
    const payload = {
        id: user.id,
        username: user.username,
        department: user.department
    }
    const secret = process.env.JWT_SECRET || 'SSSSSSHHH?'
    const options = {
      expiresIn: '1h'
    }
    return jwt.sign(payload, secret, options)
}

module.exports = newtoken