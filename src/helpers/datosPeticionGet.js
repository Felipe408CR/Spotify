// 1. Para donde voy

const ID_ARTISTA="0NGAZxHanS9e0iNHpR8f2W"

export const URI= `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN= "Bearer BQCBrVQlED_BAIXzb-KJvenU8uell8uIx29kBVLOzR1JzclBrxSixYklRLyWTYnkVRucjMRxCfzkDaXtygoj2X5o_0uf3eQ6xZg8M2CcLVIOWpjdNDSsuuVgq4m4elc3oqVGXT_sWA6qrmt0vtH71scp7ferP5FoU6ZMOO3W8pGGFhWFr88pyqoUZ0Yg0K8"

// 2. Configurar la petición

export const PETICION={
    method: "GET",
    headers: {
        Authorization: TOKEN
    }
}