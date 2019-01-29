
const expressJoi = require('express-joi')
const Joi = expressJoi.Joi
exports.userSchema = {
    signup : {
     name : Joi.string().min(3).required(),
    email : Joi.string().required(),
    phone : Joi.number().required(),
    pass : Joi.string().required()
    },
    login : 
    {
        email : Joi.string().email().required(),
        pass : Joi.string().alphanum().min(3).max(12).required(),
        new_pass :Joi.string().alphanum().min(3).max(12).required()
    },    
    update : 
    {
        email : Joi.string().email().required(),
        pass : Joi.string().alphanum().min(3).max(12).required(),
        new_pass :Joi.string().alphanum().min(3).max(12).required()
    }    
}