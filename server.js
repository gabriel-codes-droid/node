import http from 'http'
const PORT = 8000;

const server = http.createServer((req,res)=>{
// res.setHeader('Content-Type','text/html')
// res.statusCode =404 ;

res.writeHead(400, {'Content-Type':'application/json'})
//res.end("<h1>Hello ma guy</h1>")
res.end(JSON.stringify({message :'Server Error '}))
});
server.listen(PORT,()=>{
console.log(`Server running at port ${PORT}`);
});