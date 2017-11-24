
var mongoose = require('mongoose');
var url = "mongodb://127.0.0.1/stu";

var db = mongoose.connection

db.on('error',function(error){
  console.log("connect mongodb server error");
});

db.on('open',function(){
  console.log("连接成功！");
});

mongoose.connect(url);

var Schema = mongoose.Schema;

var stuSchema = new Schema({
  name:{type:String},
  age:{type:Number},
  sex:{type:String}
},
{versionKey: false}
);


var stu = mongoose.model("stu",stuSchema);
module.exports = stu
