const mongoose = require('mongoose');
const schema = mongoose.Schema;
const productschema = new schema({
 name:{
	 type:String,
	 required:true
	  },
	  price:{
		  type:Number,
		  required:true
	  },
	  description:{
		  type:String,
		  required:true
	  }
 });
 const productmodel = mongoose.model('products',productschema);
 module.exports = productmodel;	//export the model