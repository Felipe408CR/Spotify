// GENERAR UN TOKEN AUTOMATICO

// URI

const URI = "https://accounts.spotify.com/api/token"

// DATOS DE ENVIO

const DATO1 = "grant_type=client_credentials"
const DATO2 = "client_id=04f68e9473d34215876bd5798e02d974"
const DATO3 = "client_secret=f600bf608f8f4f1298925912cfff8e60"

// PARAMETROS PETICION 

const PETICION = {

    method: "POST",
    headers: {},
    body: DATO1+"&"+DATO2+"&"+DATO3

}

// FETCH