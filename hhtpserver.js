const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log("new request recieved");
    console.log(req);
    res.end("hello from server");
});

myServer.listen(8000,() => console.log("Server Started"));
