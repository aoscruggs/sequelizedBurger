var Sequelize =require("sequelize");
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger",{
	burger_name: {
		type: Sequelize.STRING
	},
	devoured: {
		type: Sequelize.BOOLEAN,
		 defaultValue: false,
	},	 
	id: {type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    }

},
	{freezeTableName: true

},
	{
		timestamps: false
});

Burger.sync({force: true}).then(function() {
	return Burger.create({
	burger_name: "Double Cheese Burger",
	devoured: "False",
	id: 1
	});

});
	
module.exports = Burger;