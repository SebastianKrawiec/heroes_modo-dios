const fs = require("fs");
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json","utf-8"));


module.exports = {
    
    index: (req,res) => {

        let rese = [];
        let id = Number(req.params.id);

        function search(){
            
            heroes.forEach(element => {
                 if(element.id === id){
                     rese.push(element.id, element.nombre, element.profesion, element.resenia);
                 }
             });
         
             return rese;
         };
         
         search();
         if(id === rese[0]){
             res.render("heroes", {
                title: "heroes",
                css: "style.css",
                text: "Donde podrás encontrar a tus heroes favoritos",
                data: rese,
                footer: "Son las decisiones las que nos hacen ser quienes somos, y siempre podemos optar por hacer lo correcto..."
            });
            
        } else { 
            res.render("heroes_error", {
                title: "heroes",
                mensaje: "no existe el heroe que estas buscando",
                css: "style.css",
                text: "Donde podrás encontrar a tus heroes favoritos",
                footer: "Son las decisiones las que nos hacen ser quienes somos, y siempre podemos optar por hacer lo correcto..."
            });
        }
    },

    bios: (req,res) => {
        let rese = [];
        let id = Number(req.params.id);
        let ok = req.params.ok;

        function search(){
            
            heroes.forEach(element => {
                 if(element.id === id){
                     rese.push(element.id, element.nombre, element.profesion, element.resenia);
                 }
             });
         
             return rese;
         };
         
         search();
         
         if(id === rese[0] && ok === "ok"){
             res.render("heroes_ok", {
                title: "heroes",
                css: "style.css",
                text: "Donde podrás encontrar a tus heroes favoritos",
                data: rese,
                footer: "Son las decisiones las que nos hacen ser quienes somos, y siempre podemos optar por hacer lo correcto..."
            });
            
        } else if (id === rese[0] && ok !== "ok"){

            res.render("heroes_ok-no", {
                title: "heroes",
                css: "style.css",
                text: "Donde podrás encontrar a tus heroes favoritos",
                mensaje: "y lamento que no desees saber más de mi :(",
                data: rese,
                footer: "Son las decisiones las que nos hacen ser quienes somos, y siempre podemos optar por hacer lo correcto..."
            });
        
        } else { 
            res.render("heroes_error", {
                title: "heroes",
                css: "style.css",
                mensaje: "No encontramos un héroe para mostrarte su biografía",
                text: "Donde podrás encontrar a tus heroes favoritos",
                footer: "Son las decisiones las que nos hacen ser quienes somos, y siempre podemos optar por hacer lo correcto..."
            });
        }

    }
}