import Joi from 'joi';

const update = Joi.object({
    address: Joi.string().required(),
    detailedAddress: Joi.string(),
    company: Joi.string(),
    zipCode: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.object().required(),
    addressName: Joi.string().required(),
    defaultAddress: Joi.boolean().required(),
});

export default { update };
