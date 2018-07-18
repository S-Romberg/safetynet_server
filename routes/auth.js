
var express = require('express');
var router = express.Router();

const queries = require('../queries')
const authUtils = require('../utils/auth')

router.post('/login', function(req, res, next) {
  console.log(req.body)  
  queries.getUserByName(req.body.name)
    .then(user => {
        if(!user){
            res.json({
                error: 'User not found'
            })
            return
        }
       
        const passwordMatch = authUtils.comparePassword(req.body.password, user.password)
       
        if(passwordMatch){
            const token = authUtils.createJWT(user)
            return res.json({ success: true, token })
        } else {
            return res.json({error: 'Incorrect password'})
        }
    })
});

router.post('/signup', function(req, res, next) {
  res.json({message: 'signup successful'});
});

module.exports = router;