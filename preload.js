const http = require('http');
const url = require('url');
const fs = require('fs');

//"http://127.0.0.1:8080/index"
http.createServer( function(req, res){
    const url_parse = url.parse(req.url, true);
    let pathname = url_parse.pathname;

    if(pathname === "/index"){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else if(pathname === "/deck"){
        fs.readFile('deck.html', function(err, data){
            res.writeHead(200, {'content-Type' : 'text/html'})
            res.write(data);
            return res.end();
        })
    }
    else if(pathname === "/deck/list"){
        fs.readdir("./Store", function(err, files){
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.write(JSON.stringify(files));
            res.end();
            // if(err) throw err;
        })
    }
}).listen(8080);