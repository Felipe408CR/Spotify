
import {URI,PETICION} from '../helpers/datosPeticionGet.js'

// 3. Arranca pues
// Consumo del Api

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks)

    
})

.catch(function(error){
    console.log(error)
})

