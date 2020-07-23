const { fstat } = require("fs")

/*let number=100;
module.exports=()=>{
    console.log(number)
}*/module.exports=(done)=>{
    fs.readdir('./','utf8',(err,files)=>{
        if(err){
            done('somethinf wrong')
        }else{
            done(files.join('\n'))
        }
    })
}