const User = require("./user");
const RefreshToken = require("./refreshTokens");

user.hasMany(RefreshToken, {foreignKey:"user_id"});
RefreshToken.belongsTo(user, {foreignKey:"user_id"});

module.exports = {
    User,
    RefreshToken
};

