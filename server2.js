import { createServer} from 'http'
const PORT =process.env.PORT
const users =[
    {id: 1, name :'John Doe'},
    {id: 2, name :'Jim Doe'},
    {id: 3, name :'Jane Doe'},
];
const server =createServer((req,res)=>{

});
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})