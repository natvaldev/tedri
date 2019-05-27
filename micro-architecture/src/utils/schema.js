const joi = require('@hapi/joi')

exports.validate = (value, schema) => joi.validate(value, schema)