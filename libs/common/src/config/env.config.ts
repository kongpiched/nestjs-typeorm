import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().positive().required(),
  DB_DATABASE: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_LOGGING: Joi.string().required(),
  APP_PORT: Joi.number().positive().required(),
});
