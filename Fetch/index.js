const data = [
    {
        id: 1,
        name: 'Luis Salazar',
        age: 35
    },
    {
        id: 2,
        name: 'Alfredo Lamas',
        age: 36
    },
    {
        id: 3,
        name: 'Alejandro Torres',
        age: 37
    }
]

const getData = () => {
    return new Promise((resolve, reject)=>{ // promesa --> resolve: cuando todo esta ok // reject: cuando hay un error
        if(data.length === 0){
            reject(new Error('Data no existe')) //marca error si no encuentra la información
        }
        setTimeout(() =>{
            resolve(data) //esta todo ok, y aca está la información
        },1000)
    })
}

//getData().then(datos => console.log(datos))

/*const fetchedData = async () =>{
    try{
        const fetchedValues = await getData()
        console.log(fetchedValues)
    } catch (error){
        console.log(error) 
    }
}

fetchedData()
*/