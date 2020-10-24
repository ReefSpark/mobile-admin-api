const Joi = require('joi');
class validation {

    async addCategory(req) {
        let schema = Joi.object().keys({
            category_name: Joi.string().required()
        });

        return schema.validate(req, { abortEarly: false });
    }
    async updateCategory(req) {
        let schema = Joi.object().keys({
            category_name: Joi.string(),
            status: Joi.bool()
        });

        return schema.validate(req, { abortEarly: false });
    }
    async addService(req) {
        let schema = Joi.object().keys({
            service_name: Joi.string().required(),
            category_name: Joi.string().required(),
            vehicle_name: Joi.string().required(),
            vehicle_cc: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required(),
            tax: Joi.number().required()
        });

        return schema.validate(req, { abortEarly: false });
    }
    async updateService(req) {
        let schema = Joi.object().keys({
            service_name: Joi.string(),
            description: Joi.string(),
            price: Joi.number(),
            tax: Joi.number()
        });

        return schema.validate(req, { abortEarly: false });
    }

}

module.exports = new validation;