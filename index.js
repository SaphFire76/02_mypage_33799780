var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    //console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>My First Webpage</title></head><body><h1>Hello World!</h1><h2>Ciao Mondo!</h2><p>こんにちは世界!</p></body></html>");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
