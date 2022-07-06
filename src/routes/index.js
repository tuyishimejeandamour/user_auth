const express = require('express');
const router = express.Router();
const {getProducts, postProducts} = require('./product');
const {sign_in,sign_up} = require('./user');
const passport = require('passport');
const jwt = require('jsonwebtoken');


router.get('/products', getProducts)
router.post('/product',passport.authenticate('jwt',{session: false}), postProducts)
router.post('/auth/login',(req,res,next)=>{
     passport.authenticate('login', async (err, user, info) => {
    try {
        if (err || !user) {
            const error = new Error('An error occured');
            return next(error);
        }
        req.login(user, { session: false }, async (err) => {
            if (err) {
                return next(err);
            }
            const body = {
                id: user._id, email: user.email, name: user.name
            };
            const token = jwt.sign({ user: body }, '1234', { expiresIn: '1h' });
            return res.json({ token });


        })
} catch(err){
    return next(err);
}
}
)(req,res)})
router.post('/auth/signup',passport.authenticate('signup',{session:false}), sign_up)


module.exports = router;