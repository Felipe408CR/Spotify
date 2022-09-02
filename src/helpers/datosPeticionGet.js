// 1. Para donde voy

const ID_ARTISTA="0NGAZxHanS9e0iNHpR8f2W"

export const URI= `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN= "Bearer BQCYS1ReZVjRnNUkVGxupi6Z5abm1gmpQxHFB4pgKhVvZG1igSFLzupDBa-wH_ZQ9Q5b6gtBw6M5KIfntBMiIkHsj5e0394y-AfhSq0WIvVyS9cdx30SV_anU2z_leYi3UDXyzvf6yn_Sl4QEDoTTEXPkK5rQObnXM3ZOnv2i-wBMU-I1liKXLg4wpXP1qE"

// 2. Configurar la petición

export const PETICION={
    method: "GET",
    headers: {
        Authorization: TOKEN
    }
}