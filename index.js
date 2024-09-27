const fs = require("fs");
const superagent = require("superagent");
const { reject } = require("superagent/lib/request-base");

function readFilePro(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("Could not find file");
      resolve(data);
    });
  });
}

function writeFilePro(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      resolve("success");
      if (err) reject("Could not write to file");
    });
  });
}

/* 
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log("Breed:", data);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    return writeFilePro("dog-img.txt", res.body.message);
  })
  .then(() => {
    console.log("Random dog image saved to file!");
  });
 */


  async function getDogPic(){
   const data = await  readFilePro(`${__dirname}/dog.txt`)
  }