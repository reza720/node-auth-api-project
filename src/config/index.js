const env = require("./env.config");
const database = require("./database.config");
const logger = require("./logger.config");
const mailTransporter = require("./mailTransporter");
const rateLimiter = require("./rateLimiter.config");

module.exports ={
    env,
    database,
    logger,
    mailTransporter,
    rateLimiter
};

