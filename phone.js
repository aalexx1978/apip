var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  spec: String,
  img: String,
  price: String,
  color: String
});
mongoose.model('phone', UserSchema);
module.exports = mongoose.model('phone');