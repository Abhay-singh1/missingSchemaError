const User = require('../../models/Users');
const express = require('express');
const { check , validationResult} = require('express-validator');
const router = express.Router();
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
// const express = require('express')
console.log('user error!')
router.post('/',[
    check('name','Name is requuired!').not().isEmpty(),
    check('email','Please include a valid Email!').isEmail(),
    check('password','Password should be more than 6 characters!').isLength({min:6})
],

async(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    const {name,email,password} = req.body

    try{
        let user = await User.findOne({email}) ;
        if(user){
            res.status(400).json({errors:[{msg:'User Already exists'}]})
        }

        const avatar = gravatar.url(email,{
            s:'200',
            r:'pg',
            d:'mm'
        }); 

        user = new User({
            name,
            email,
            avatar,
            password
        })

        const salt = await bcrypt.genSalt(10)

        user.password = await bcrypt.hash(password, salt)

        await user.save()

        res.send('Data Saved!!')
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }

});
console.log('no error!')

module.exports = router;
