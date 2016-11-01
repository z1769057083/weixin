var express = require("express");
var app     = express();
var path    = require("path");
//加载 token 模块
require("./token.js")(app);
var saticpath = path.join(__dirname,"../static");
app.use(express.static(saticpath));
app.listen(80,function(){
	console.log("open http://127.0.0.1:80");
})
