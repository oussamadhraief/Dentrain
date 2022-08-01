import Joi from 'joi';

const update = Joi.object({
    name: Joi.string().required().max(30).min(4),
    phone: Joi.string().required().max(20).min(8),
});

export default { update };
