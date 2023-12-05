import Joi from "joi";

const todoValidation = Joi.object({
    task:Joi.string().required(),
    completed:Joi.boolean().default(false),
})

export default todoValidation;