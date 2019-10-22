var express = require('express');

var app=express();

app.use(express.static(__dirname+'./../build'));

app.listen(3001);

console.log('now server is running on :3001');