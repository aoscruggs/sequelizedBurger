let connection = require('../config/connection.js');

let burger = {
	show : function(callback){
		connection.query("SELECT * FROM burgers;", function(err, data) {
		    if (err) {
		      throw err;
		    }

		    return callback(data);
		});
	},
	add : function(name, devoured, callback){
	  connection.query("INSERT INTO burgers(burger_name, devoured ) VALUES (?,?)", [name, devoured], function(err, result) {
	    if (err) {
	      throw err;
	    }

	    callback(result);
	  });		
	},
	
	update : function(id, callback){
    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [id], function(err, result) {
      console.log('we made it here');
      if (err) {
        throw err;
      }
    
      callback(result);
    });
  },

	 delete : function(id, callback){
	    connection.query("DELETE FROM burgers WHERE id = ?", [id], function(err, result) {
	      console.log('we made it here');
	      if (err) {
	        throw err;
	      }
	    
	      callback(result);
	    });
	  }
	
};

module.exports = burger;