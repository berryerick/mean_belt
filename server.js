var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express()

app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())

require('./server/config/mongoose.js')

require('./server/config/routes.js')(app)

app.listen(8000, function(){
  console.log("active on port 8000");
})
