import Joi from 'joi';

const update = Joi.object({
    name: Joi.string().required().max(30).min(4),
});

export default { update };
