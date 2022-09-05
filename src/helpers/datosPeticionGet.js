// 1. Para donde voy

const ID_ARTISTA="0NGAZxHanS9e0iNHpR8f2W"

export const URI= `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

// Llamar al servicio de token

const TOKEN= "Bearer BQBMYBVpfBFQbfVd6G_5Ujh798hHrywQyo6hJjvbA5KNl82sH1Lj-3S5Mq26O9XiSyL9ZjDFIPSirqRuZ47aYi4tE0DPHWlkzgb1za1i6IYr47BLCvL0jkw6Mbg1bGucX6bnJbVkKCiXmSxKRaFWKDu5YAB0UnX-WtsMrImHG95mLPS8cE4vPxZGaUdnZ24"

// 2. Configurar la petición

export const PETICION={
    method: "GET",
    headers: {
        Authorization: TOKEN
    }
}