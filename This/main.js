const luis = {
    name: 'Luis',
    age: 35,
    instagram: 'lanzaroth.js',
    saludar: function(vozAlta, enDespedida){
        const saludoOficial = `Hola soy ${this.name}`
        const despedidaOficial = 'Adios'

        const saludo = vozAlta ? saludoOficial.toUpperCase(): saludoOficial
        const despedida = enDespedida ? despedidaOficial.toUpperCase():despedidaOficial

        console.log(saludo)

        if(enDespedida){
            console.log(despedida)
        }

        // this.seguirmeEnInstagram()
    },
    seguirmeEnInstagram: function(){
        console.log(`Hola, sigueme en ${this.instagram}`)
    },
    familia: {
        name: 'Mariana',
        age: 38,
        saludar: function(){
            console.log(`Hola ${this.name}`)
        },
    }
}

const alfredo = {name: 'Alfredo'}
alfredo.saludar = luis.saludar

alfredo.saludar()

// luis.saludar(true, true)
// luis.familia.saludar() 