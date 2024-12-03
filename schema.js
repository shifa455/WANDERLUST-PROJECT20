const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required(),
        'image.url': Joi.string()
            .uri()
            .empty('')
            .default('https://example.com/default-image.jpg'),
    }).required()
});

const reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string().required(),
        rating: Joi.number().min(1).max(5).required()
    }).required()
});

module.exports = { listingSchema, reviewSchema };

