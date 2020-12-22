module.exports = {
    index: (req,res) => {
        res.render('index', { 
            title: 'DH HEROES',
            css : "style.css",
            text: "​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.",
            
            footer: "Un gran poder, conlleva una gran responsabilidad...",
        });
    }
}