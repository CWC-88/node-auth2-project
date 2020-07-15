module.exports = {
    ValidUser
    
}



function ValidUser(user) {
    return Boolean(user.username && user.password && typeof user.password === "string" && user.department)
}