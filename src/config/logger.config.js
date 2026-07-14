const winston = require("winston");
const path = require("path");
const fs = require("fs");

const rootDr=path.resolve(__dirname, "../../");
const logDr=path.join(rootDr, "logs");
fs.mkdirSync(logDr,{recursive:true});

const logger = winston.createLogger({
    level:"info",
    format:winston.format.combine(
        winston.format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
        winston.format.errors({stack:true}),
        winston.format.splat(),
        winston.format.json()
    ),
    transports:[
        new winston.transports.File({
            filename:path.join(logDr, "info.log"),
            level: "info"
        }),
        new winston.transports.File({
            filename:path.join(logDr, "error.log"),
            level: "error"
        })
    ]
});
module.exports=logger;