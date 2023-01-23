// const luis = {
//     name: 'Luis',
//     age: 35,
//     instagram: 'lanzaroth.js',
//     saludar: function(vozAlta, enDespedida){
//         const saludoOficial = `Hola soy ${this.name}`
//         const despedidaOficial = 'Adios'

//         const saludo = vozAlta ? saludoOficial.toUpperCase(): saludoOficial
//         const despedida = enDespedida ? despedidaOficial.toUpperCase():despedidaOficial

//         console.log(saludo)

//         if(enDespedida){
//             console.log(despedida)
//         }

//         this.seguirmeEnInstagram()
//     },
//     seguirmeEnInstagram: function(){
//         console.log(`Hola, sigueme en ${this.instagram}`)
//     },
//     familia: {
//         name: 'Mariana',
//         age: 38,
//         saludar: function(){
//             console.log(`Hola ${this.name}`)
//         },
//     }
// }

// const boton = document.getElementById('button')

// //boton.addEventListener('click', luis.saludar.bind(luis))

// boton.addEventListener('click', luis.seguirmeEnInstagram.bind(luis))



//BLOQUE 2


const luis = {
    name: 'Luis',
    age: 35,
    instagram: 'lanzaroth.js',
    saludar: function(vozAlta, enDespedida){
        const saludoOficial = `Hola soy ${this.name}`
        const despedidaOficial = 'Adios'

        const seguirmeEnInstagram = () => console.log(`Hola, sigueme en ${this.instagram}`)

        const saludo = vozAlta ? saludoOficial.toUpperCase(): saludoOficial
        const despedida = enDespedida ? despedidaOficial.toUpperCase():despedidaOficial

        console.log(saludo)

        if(enDespedida){
            console.log(despedida)
        }

        seguirmeEnInstagram()
    },
    familia: {
        name: 'Mariana',
        age: 38,
        saludar: function(){
            console.log(`Hola ${this.name}`)
        },
    }
}


const boton = document.getElementById('button')

boton.addEventListener('click', luis.saludar.bind(luis))

