const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const bodyParser = require('body-parser');
let app=express();
//访问静态文件

//解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.use(express.static(path.join(__dirname,"public")))

//post提交的数据会解析到req.body中
//app.use(express.urlencoded({extended:false}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//连接到数据库
mongoose.connect("mongodb://localhost:27017/boss");
const conn=mongoose.connection; //连接

conn.on("open",()=>{//成功返回函数
    console.log("连接成功！")
})
conn.on("error",()=>{//失败返回函数
    console.log("连接失败！")
})

//定义一个schema,规定了该集合的数据格式和类型
let userSchema=mongoose.Schema({//定义user Schema
    name:String,
    pwd:String

})

let worklistSchema=mongoose.Schema({//定义worklist Schema
    iconimg: String,
    subName: String,

})


//定义model
let model=mongoose.model("users",userSchema)
let workmodel=mongoose.model("worklists",worklistSchema)
//路由

//注册请求
app.post("/api/postuser",(req,res)=>{
    const {name,pwd} = req.body;
    if(!name || !pwd){
        res.send({"success":"0","errMsg":'密码和用户名不能为空！'});
        return;
    }
    //由model创建对应的document实例，实例可以执行插入操作
    let doc=new model({
        name:name,
        pwd:pwd
    })

    model.find({"name":name},(err,data)=>{
        if(data.length!=0){
            res.send({"success":"0","errMsg":'该用户已存在！'});
        }else {
            //执行插入
            doc.save((err,data)=>{
                // console.log(data);
                if(err){
                    res.send({"success":"0"})
                }else{
                    res.send({"success":"1","errMsg":'注册成功！'})
                }
            })
        }
    })
})

//登录请求
app.post("/api/getUser",(req,res)=>{
    console.log(req.body);
    const {lname,lpwd} = req.body;

    model.find({"name":lname},(err,data)=>{
        console.log(data)
        if(data.length==0){
            res.send({"success":"0","errMsg":'该用户不存在！'})
        }else if(data[0].name==lname&&data[0].pwd==lpwd){
            res.send({"success":"1","errMsg":'登录成功！'})
        }else{
            res.send({"success":"0","errMsg":'用户名或密码错误！'})
        }
    })
})

app.get("/api/getworklist",(req,res)=> {
    workmodel.find((err,data) => {
        console.log(data)
        res.send(data)
    })

})


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})