const db = require('../database/dbconfig');

module.exports = {
    add,
    getting,
    getbyid,
    ValidUser
  }
  // http://localhost:5000/api/auth/register
  // http://localhost:5000/api/user
  function add(user){
      const newUser = db("user").insert(user)
      return newUser
  }


function getting() {
  return db('user').select('id', 'username', 'password')
  }

  function getbyid(id) {
    return db('users')
      .where({ id })
      .first()
  }


  function ValidUser(user) {
    return Boolean(user.username && user.password && typeof user.password === "string" && user.department)
}