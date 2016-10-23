var express = require('express');
var app = express();
var client = require('twilio')('ACc44ef72a6451a734b68fc61f77a2586d', '77684b63f89553abfa41227487be0b77');

app.get('/', function (req, res) {
  client.messages.create({
    body: `There's a ${req.query.situation} at ${req.query.location}.\nPlease Send Help Immediately!`,
    to: `${req.query.responderNum}`,
    from: '+1 609-454-6718' 
  }, function(err, data) {
    if (err) {
      console.error(err);
    }
  });
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
