const fs = require('fs')
const superagent = require('superagent')
fs.readFile(`${__dirname}/dog.txt`,'utf-8',(err,data)=>{
    console.log('Breed:',data)
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res)=>{
        console.log(res.body.message)
        fs.writeFile(`${__dirname}/dog-image.txt`,res.body.message,err=>{
            console.log('Random dog image saved to file!')
        })
    })
    
})