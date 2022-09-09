// 1. Para donde voy

const ID_ARTISTA="0NGAZxHanS9e0iNHpR8f2W"

export const URI= `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

// Llamar al servicio de token

const TOKEN= "Bearer BQA2t6kPfFi2w0x0o3svpjO1gtbV7WKmS7aULAAb56fHhzSQe7vhWsOoDOEViJbgGTcyMaaPrISWEEm9zaQrltG50S3I4btweu-ob9S1HJq4XH-DP_qrgjmCoVtmKAoRGUzbmh-gxFFfgu-8_PLI4t_KJy72nKvwwjCNOnBXGk4BAAU4GCjrDWqrwVfA_6s" es un conjunto de herramientas que facilitan 

// 2. Configurar la petición

export const PETICION={
    method: "GET",
    headers: {
        Authorization: TOKEN
    }
}