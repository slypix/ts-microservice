var express = require('express')
var app = express()
var mo = { 0 : "January", 
1 : "February", 
2 : "March", 
3 : "April", 
4 : "May", 
5 : "June", 
6 : "July", 
7 : "August", 
8 : "September", 
9 : "October", 
10 : "November", 
11 : "December"
}

function nat(d){
  return mo[d.getMonth()] + " "
   + d.getDate() + ", "
   + d.getFullYear()
}

function buildObj(time) {
  var unix = time.match(/-?\d*/)[0] == time ? true : false
  var d = unix ? new Date(time*1000) : new Date(time)
  //console.log(d, d.getTime()/1000, nat(d))
  if(d != "Invalid Date") {
    return { "unix" : (d.getTime())/1000, "natural" : nat(d)}
  } else {
    return { "unix" : null, "natural" : null}
  }
}

app.use(express.static(__dirname+'/public'))

app.param('ts', function (req, res, next, t) {
  console.log(t)
  req.t = t
  next();
});

app.get('/:ts', function (req, res) {
  var ts = buildObj(req.t)
  res.send(ts)
  res.end()
});

app.use(function(req, res, next) {
  //res.status(404).send('Sorry cant find that!');
  res.status(404).sendFile(__dirname + '/public/404.html')
});

app.listen(Number(process.argv[2]) || 3000)