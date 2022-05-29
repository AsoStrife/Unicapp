let constants = {
    
    "app": {
        "name": "Unicapp", 
        "version": "4.0.0", 
        "author": "Webenterprises", 
        "locale": "it", 
        "fallbackLocale": "it",
        "supportedLanguages": [ 
            {
                'lang': 'it', 
                'name': 'Italiano'
            }
        ]
    },
    "localstorage": {
        "credentials": "credentials",
        "user": 'user',
        "careers": 'careers',
        "selectedCareer": 'selectedCareer',
        "selectedUniversity": 'selectedUniversity'
    },
    "api": {
        "middlewareUrl": "http://127.0.0.1:8000/",
        "middlewareUrlPhoto": "http://127.0.0.1:8000/photo",
        "esse3": {
            "login": "%s1" + "login",
            "careers": "%s1" + "anagrafica-service-v2/carriere/%s2", // stuId
            "people": "%s1" + "anagrafica-service-v2/persone",
            "photo": "%s1" + "anagrafica-service-v2/persone/%s2/foto", // persId
            "booklet": "%s1" + "libretto-service-v2/libretti/%s2/righe", //mathId
            "bookletVotesAvg": "%s1" + "libretto-service-v2/libretti/%s2/medie", //matId
            "taxes": "%s1" + "tasse-service-v1/addebiti-studente?stuId=%s2" //stuId
        }
    },
    "defaultValues": {
        "firstName": "Mario", 
        "lastName": "Rossi", 
        "id": "00/00/0000", 
        "profilePic": "./default/defaultProfilePic.png",
        "mathAvg": "0", 
        "weightedAvg": "0",
        "email": "default[at]studenti.unica.it", 
        "mobile": "333 555 777",
        "address": "Via Roma 50, Cagliari",
        "titleList": "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        "titleAfter": "12 CFU"
    },
    "booklet": {
        "laudeSymbol": "L",
    },
    "emoji": {
        "greenCirle": "&#128994;", 
        "redCirle": "&#128308;",
        "orangeCirle": "&#128992;"
    },
    "taxes": {
        "greenLight": "VERDE", 
        "redLight": "ROSSO", 
        
    }
    
}

export default constants;