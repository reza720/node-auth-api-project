const user = require("./user");
const user_password_reset = require("./user.password_reset");

user.hasMany(user_password_reset, {foreignKey:"user_id"});
user_password_reset.belongsTo(user, {foreignKey:"user_id"});

module.exports = {
    user,
    user_password_reset
};

