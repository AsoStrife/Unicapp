let constants = {
    
    "app": {
        "name": "Unicapp", 
        "version": "4.0.0", 
        "author": "Webenterprises", 
        "locale": "it", 
        "fallbackLocale": "it",
        "debug": true,
        "supportedLanguages": [ 
            {
                'lang': 'it', 
                'name': 'Italiano'
            }
        ]
    },
    "urls": {
        "andreacorriga": "https://andreacorriga.com", 
        "ig_andreacorriga": "https://instagram.com/AsoStrife",
        "ig_unicapp": "https://instagram.com/unicapp_official",
        "fb_unicapp": "https://facebook.com/unicapp.official"
    },
    "localstorage": {
        "credentials": "credentials",
        "user": 'user',
        "careers": 'careers',
        "selectedCareer": 'selectedCareer',
        "selectedUniversity": 'selectedUniversity',
        "profilePic": "profilePic"
    },
    "api": {
        "middlewareUrlDebug": "http://127.0.0.1:8000/",
        "middlewareUrlPhotoDebug": "http://127.0.0.1:8000/photo",
        "middlewareUrlRemote": "https://unicapp.andreacorriga.com/",
        "middlewareUrlPhotoRemote": "https://unicapp.andreacorriga.com/photo",
        "esse3": {
            "login": "%s1" + "login",
            "careers": "%s1" + "anagrafica-service-v2/carriere/%s2", // stuId
            "people": "%s1" + "anagrafica-service-v2/persone",
            "photo": "%s1" + "anagrafica-service-v2/persone/%s2/foto", // persId
            "booklet": "%s1" + "libretto-service-v2/libretti/%s2/righe", //mathId
            "bookletVotesAvg": "%s1" + "libretto-service-v2/libretti/%s2/medie", //matId
            "bookletStats": "%s1" + "libretto-service-v2/libretti/%s2/stats", //matId
            "taxes": "%s1" + "tasse-service-v1/addebiti-studente?stuId=%s2", //stuId
            "tests": "%s1" + "libretto-service-v2/libretti/%s2/appelli?q=APPELLI_PRENOTABILI_E_FUTURI", //matId
        }
    },
    "defaultValues": {
        "firstName": "Mario", 
        "lastName": "Rossi", 
        "id": "00/00/0000", 
        "profilePic": "./default/defaultProfilePic.png",
        "mathAvg": -1.0, 
        "weightedAvg": -1.0,
        "totalCfu": -1, 
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
        
    },
    "tests": {
        "bookable": "Prenotazioni Aperte"
    }
    
}

export default constants;