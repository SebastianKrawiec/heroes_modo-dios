const fs = require("fs");
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json","utf-8"));

let id = 1;

let rese = [];
function search(){

   heroes.forEach(element => {
        if(element.id === id){
            rese.push(element.id, element.nombre, element.profesion)
        }
    });

    return rese;
}

console.log(search()[2]);