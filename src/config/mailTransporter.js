const env = require("./env.config");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: env.email.host,
    port: env.email.port,
    secure: env.email.secure,
    auth: {
        user: env.email.user,
        pass: env.email.password
    }
});

module.exports = transporter;