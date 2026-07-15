const {database} = require("../config");
const {DataTypes} = require("sequelize");

const User_Password_Reset = database.define("User_Password_Reset",{
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    user_id : {type:DataTypes.INTEGER, allowNull:false},
    token : {type:DataTypes.STRING, allowNull:false, unique:true},
    expires_at : {type:DataTypes.DATE, allowNull:false},
    used_at : {type:DataTypes.DATE, allowNull:true}
},{
    timestamps:true
});

module.exports = User_Password_Reset;
