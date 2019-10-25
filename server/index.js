var express = require('express');
var path=require('path');

var app=express();

app.use(express.static(path.join(__dirname,'..','client','build')));

app.use(function(req,res,next){
  if(app.get('env')==='development'){
    res.send('default response');
  }else{
    console.log('env',app.get('env'));
    res.sendFile(path.join(__dirname,'..','client','build','index.html'));
  }
});

const port=process.env.PORT||3001;
app.listen(port);
console.log('now, server and theme are working on ',port);