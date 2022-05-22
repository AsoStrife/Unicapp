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
            "booklet": "%s1" + "libretto-service-v2/libretti/%s2/righe",
            "bookletVotesAvg": "%s1" + "libretto-service-v2/libretti/%s2/medie" //matId
        }
    },
    "defaultValues": {
        "firstName": "Mario", 
        "lastName": "Rossi", 
        "id": "00/00/0000", 
        "profilePic": ""
    }
    
}

export default constants;