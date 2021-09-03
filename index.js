const http = require('http');
const fs = require('fs');
const path =require('path');

const hostname = "localhost"; //for host name
const port = 3000;            // for assigning a port

//creating a server
const server = http.createServer((req, res) =>{

	
	
//	console.Log('request for '  +req.url + 'by method ' +  req.method); 
	if(req.method == 'GET')  //to check if mathod is get
	{
		var fileURL;
		if(req.url == '/')
	{
		fileURL = "/index.html" 
	}
	else 
		{fileURL = req.url}
	
	var filePath = path.resolve('./public'+fileURL); //determine using it's file's path
	const fileExt = path.extname(filePath);  //determine using it's file's extension
	
	if(fileExt == '.html') //file ka extension .html h ya nahi
	{
		fs.exists(filePath, (exists) => {
			if(!exists){
				res.statusCode = 404; //that means file or url not found
				res.setHeader('Content-type','text/html');
				res.end('<html> <body><h1> Does not exist :( </h1></body> </html>');
			}
			res.statusCode = 200; //that means connect is successfully generated file exist
			res.setHeader('Content-type','text/html');
			fs.createReadStream(filePath).pipe(res);  //this fucntion is take the input of file input may be large and using this createReadStream()method input will change it into stream of bytes and pass it using pipe() function

		});
	}
	else

	{
		res.statusCode = 404; //that means file or url not found
		res.setHeader('Content-type','text/html');
		res.end('<html> <body><h1>error 404 :'+ fileURL+ 'html file doest not exist</h1> </body> </html>');
	}


}
else
{
	res.statusCode = 404;
	res.setHeader('Content-type','text/html');
	res.end('<html> <body> <h1> error 404: ' + fileURL+' not supported </h1> </body> </html>' )
}
});


 
server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}`);
});



//--------------------------------------------------------------------------------------//
// req_url is incoming url  and req.method is type of method (get/post/)
//	console.log(req.headers);  //geting allt information about the client that requested	
// 	res.statusCode = 200; //that means connect is successfully generated 
// 	res.setHeader('Content-type','text/html');
// 	res.end('<html> <body><h1>Server conncetion success :) </h1></body> </html>');
// });
//--------------------------------------------------------------------------------------//
