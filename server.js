import http from 'http'
const PORT = process.env.PORT;

const server = http.createServer((req,res)=>{
// res.setHeader('Content-Type','text/html')
// res.statusCode =404 ;
console.log(req.url);
console.log(req.method);


res.writeHead(200, {'Content-Type':'text/html'})
//res.end("<h1>Hello ma guy</h1>")
res.end('Hi hello how re u doing')
});
server.listen(PORT,()=>{
console.log(`Server running at port ${PORT}`);
});
