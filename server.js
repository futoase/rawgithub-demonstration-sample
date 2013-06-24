var http = require('http')
  , url = require('url')
  , fs = require('fs')
  , path = require('path')
  , mime = require('mime');

HTTP_PORT = 8080;
ROOT_REAL_PATH = path.dirname(__filename);
INDEX_FILE_NAME = "index.html";

http.createServer(function(req, res){
  fs.realpath("." + req.url, function(err, resolvedPath) {
    if (err) { console.log( "File not found: " + err ); return; }

    fs.exists(resolvedPath, function(exists) {
      var contentsPath = resolvedPath;

      if (!exists || resolvedPath == ROOT_REAL_PATH) { 
        contentsPath += '/' + INDEX_FILE_NAME;  
      }

      fs.readFile(contentsPath, function(err, data){
        var type = mime.lookup(contentsPath);
        res.writeHead(200, { 'Content-Type': type });
        res.end(data);
      });
    });
  });
}).listen(HTTP_PORT);

console.log('Starting server. post is: ' + HTTP_PORT);