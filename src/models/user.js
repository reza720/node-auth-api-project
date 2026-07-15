const {database} = require("../config");
const {DataTypes} = require("sequelize");

const User = database.define("User", {
    id : {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    email : {type:DataTypes.STRING, allowNull:false, unique:true},
    userName : {type:DataTypes.STRING, allowNull:false, unique:true},
    password : {type:DataTypes.STRING, allowNull:false}
}, {
    timestamps:true
});

module.exports = User;

