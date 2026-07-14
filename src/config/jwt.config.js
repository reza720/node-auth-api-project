const env = require("./env.config");

const jwt = {
    accessToken:{
        secret:env.jwt.accessSecret,
        expiresIn:env.jwt.accessSecretExpires,
    },
    refreshToken:{
        secret:env.jwt.refreshSecret,
        expiresIn:env.jwt.refreshSecretExpires,
    }
};
module.exports=jwt;