var express = require('express');

var app=express();

app.use(express.static(__dirname+'./../client/build'));

const port=process.env.PORT||3001;
app.listen(port);
console.log('now, server and theme are working on ',port);