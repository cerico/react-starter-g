var express = require('express'),
    path = require('path'),
    session = require('express-session'),
    app = express(),
    compression = require('compression');

app.use(compression());

app.get('/',

  function(req, res){
    app.use(express.static(__dirname));
    if (1 == 1){
      res.sendFile(path.join(__dirname + '/build/index.html'),{ user: req.user });
    }else{
      res.redirect('/login')
    }
  });

app.use('/static', express.static(__dirname + '/build/static'));


var port = process.env.PORT || 5005;
app.listen(port, function () {
  console.log('Listening on ' + port);
});

