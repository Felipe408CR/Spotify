// Consumiendo Apis

// 1. Para donde voy

const URI='https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx/top-tracks?market=US'

// 2. Configurar la petición

const PETICION={
    method: "GET",
    headers: {
        Authorization: "Bearer BQBZtVKEeI1QFOiTo0wtmaNiI3Q3egXtWfATXypJhykB8U9KTBfd9lY4WvlFgWPHBqYRJLn3V0d0cMbkrDh8euwWTziFW91pUxz_5qmvysNIkJVv3eKTDdWTP7IY9xmi_dJsibo_pLyPdfOUBNRUBsfyJcBsSdeyVnlZsBlPjsZJFfaP7NB16WCYMSwap2s"
    }
}

// 3. Arranca pues
// Consumo del Api

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks)

    let fila=document.getElementById('fila')

    respuesta.tracks.forEach(function(cancion){
        
        let columna = document.createElement('div')
        columna.classList.add('col')

        let tarjeta = document.createElement('div')
        tarjeta.classList.add('card','shadow','p-3','h-100')

        let audio = document.createElement('audio')
        audio.src=cancion.preview_url
        audio.classList.add('w-100')
        audio.setAttribute('controls','controls')
       
        let nombre = document.createElement('h3')
        nombre.classList.add('fw-bold','text-center')
        nombre.textContent=cancion.name

        let imagen = document.createElement('img')
        imagen.classList.add('img-fluid','w-100')
        imagen.src=cancion.album.images[0].url

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
   
})

.catch(function(error){
    console.log(error)
})

