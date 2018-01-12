import path from 'path';
import * as helpers from '../helpers';
// joi allows you to create blueprints or schemas for JavaScript objects
// (an object that stores information) to ensure validation of key information
const Joi = require('joi');

helpers.loadENV(path.join(__dirname, '../../.env'));
// define validation for all env vars
const envVarsSchema = Joi.object().keys({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test'])
    .default('development'),
  PORT: Joi.number()
    .default(8080),
  JWT_SECRET: Joi.string().required()
    .description('JWT Secret is required to get access'),
  MONGO_HOST: Joi.string().required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
    .default(27017),
}).unknown()
  .required();
// If does not match to the schema then throw an error
const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// export all env through envVars

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
  },
};

export default config;
