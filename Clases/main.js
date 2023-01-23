/*
- Las clases son una mejora significativa sobre el manejo de la herencia
basada en prototipos de Javascript
- Podemos escribir una sintaxis sencilla para crear objetos
-No necesita la palabra function o declararse const, usa la palabra class
- Las propiedades que se asignan estan adentro de un metodo constructor
*/

//si la pagina esta cargada, va a ejcutar todo de una sola vez, automaticamewnte cargue la pagina
windows.addEventListenner("load", () => {
    class Smartphone{
        constructor(marca){
            this.marca = marca
        }
    }
}, true)