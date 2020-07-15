const router = require('express').Router()
const user = require('./model')
const restricted = require('../auth/auth_restricted')

//get 

router.get('/', ( req,res) => {
    user.getting()
    .then(gotten => {
        res.status(200).json(gotten)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "fail to get"
        })
    })
})

//get by id
router.get('/:id',(req,res)=>{
    const {id} =req.params
    user.getbyid(id)
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.status(404).json({
                message:'no such user'
            })
        }
    })
})


router.get('/', restricted,(req,res)=>{
    user.getting()
    .then(users=>{
        res.status(200).json({users,jwt:req.jwt})
    })
    .catch(error=>{
        console.log({error})
        res.status(500).json({
            message:'fail'
        })
    })
})

module.exports = router