//first of all rename this file to index.js
const http = require('http');

const hostname = "localhost"; //for host name
const port = 3000;            // for assigning a port

//creating a server

const server = http.createServer((req, res) =>{

	console.log(req.headers);

	res.statusCode = 200; //that means connect is successfully generated 
	res.setHeader('Content-type','text/html');
	res.end('<html> <body><h1>Server conncetion success :) </h1></body> </html>');
});

server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}`);
});

//and then go to the packege.json file and add in script section (, "start" : "node index") then save both file index.js and packege.json aftr that on cammand terminal type npm strat
