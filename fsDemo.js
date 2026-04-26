import fs from 'fs/promises'; 

//readFile( -callback)
// fs.readFile('./hello.txt','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });

//  //readFileSync()-Synchronous version
// const data =fs.readFileSync('./hello.txt','utf8');
// console.log(data);

//readFile()-Promise .then)()
// fs.readFile('./hello.txt', 'utf8')
//   .then((data)=>console.log(data))
//   .catch((err)=> console.log(err))

  //readFile() -async/await
const readFile = async () => {
    try{
        const data = await fs.readFile('./hello.txt','utf8');
        console.log(data);
    }catch (error){
        console.log(error)
    }
};
//writeFile()

const writeFile = async () =>{
    try{
        await fs.writeFile('./hello.txt','oy ma guy this is txt');
        console.log('File written too ...');
    }catch(error){
        console.log(error)
    };
}
//appendFile()
const appendFile = async ()=>{
    try{
        await fs.appendFile('./hello.txt','\nThis is the appended text');
        console.log('File appended too ...')
    }catch(error){
        console.log(error)
    }
}
    
writeFile();
appendFile();
readFile();