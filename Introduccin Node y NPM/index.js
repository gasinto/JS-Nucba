const axios = require('axios');

const dataPrueba = axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        console.log(response.data)
    })

dataPrueba
