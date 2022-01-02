const operations=require('./index2');
const http=require('http'); //require client and server


const fs=require('fs'); // files reader


const express=require('express'); //express framework

port=8000; //local server

function requestHandler(req,res)
{

	res.writeHead(200,{'content-type':'text/html'}); // making reponse machine and content is html


let files;

switch(req.url)
{
	case '/':
	
		files='./index.html';
		break;
	
	

}

fs.readFile(files,function(err,data) // read html file 

{
if(err)
{
	console.log('error',err);
	return res.end('<h1>Error</h1>'); // writting html code 
}
return res.end(data); // write html data
});



}

const server=http.createServer(requestHandler); //server will activate for request Handler
server.listen(port,function(err) //server listen to port and check it
{
if(err)
{
	console.log("error",err);
	return;
}

	console.log("running",port);


});



console.log(operations.add(2,19));