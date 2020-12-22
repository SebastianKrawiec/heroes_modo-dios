module.exports = {
    index: (req,res) => {
        res.render("creditos", {
            title: "creditos DH",
            text: "Autor: Sebastian Ariel, Krawiec",
            css: "style.css",
            footer: "Nosotros creamos a nuestros propios demonios..."
        })
    },

}