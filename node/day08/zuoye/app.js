
var express = require('express');
var bodyParser = require('body-parser');
var stu = require('./db.js');
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post("/index",function(req,res){
  stu.find({}).exec(function(err,data){
    if(!err){
      res.json({
        status:'y',
        message:'查找成功',
        data:data
      })
    }else{
      console.log(err);
      res.status(404).end();
    }
  })
});
app.post('/modify',function (req,res) {
    //mongoose根据条件进行查找
    stu.find({_id: req.body.id}).exec(function (err,data) {
        console.log('2')
        if (err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json({
                status:'y',
                message:'查询成功',
                data:data
            })
        }
    })
})

app.post('/modifyStu',function (req,res) {
    console.log('1')
    console.log(req.body)
    var whereStr={_id:req.body.id}
    var updateStr={
        $set:{
            name:req.body.name,
            sex:req.body.sex,
            age: req.body.age,
            other:req.body.other,

        }
    }
    stu.update(whereStr,updateStr,function (err) {
        if (err){
            console.log(err)
            res.json({
                status:'y',
                message:'修改失败',
                data:req.body
            })
        }
        else{
            console.log('数据修改成功')
            res.json({
                status:'y',
                message:'修改成功',
                data:req.body
            })
        }
    })
})


app.post('/del',function (req,res) {
    stu.remove({_id: req.body.id},function(err){
        if (err){
            console.log(err)
            res.json({
                status:'y',
                message:'删除不成功',
            })
        }
        else{
            res.json({
                status:'y',
                message:'删除成功',
            })
        }
    })
})


app.post('/findName',function (req,res) {
    console.log(req.body.searchName)
    stu.find({name: req.body.searchName}).exec(function (err,data) {
        if (err){
            console.log(err)
            res.json({
                status:'y',
                message:'查询失败',
            })
        }
        else{
            res.json({
                status:'y',
                message:'查询成功',
                data:data
            })
        }
    })
})


app.post('/addStu',function (req,res) {
    console.log(req.body)
    var newStu=new stu({
        name:req.body.name,
        sex:req.body.sex,
        age:req.body.age,
        other:req.body.other,

    })
    newStu.save(function (err) {
        if (err){
            console.log(err)
            res.json({
                status:'y',
                message:'添加失败',
                data:req.body
            })
        }
        else {
            console.log('数据添加成功')
            res.json({
                status:'y',
                message:'添加成功',
                data:req.body
            })
        }
    })
})


app.listen(8000,()=>{
    console.log('node is ok')
})
