import store from './store'
import axios from 'axios'
import universities from './universities'




const api = {}

api.getUrl = (api) => {
    store.getSelectedUniversity()
    const selectedUniversity = store.getSelectedUniversity()
    const baseUrl = universities[selectedUniversity]?.url
    
    let urls = {
        "login": baseUrl + "login",
        "careers": baseUrl + "anagrafica-service-v2/carriere/%s",
        "people": baseUrl + "anagrafica-service-v2/persone",
        "photo": baseUrl + "anagrafica-service-v2/persone/%s/foto",
        "booklet": baseUrl + "libretto-service-v2/libretti/%s/righe",
        "bookletVotesAvg": baseUrl + "libretto-service-v2/libretti/%s/medie"
    }
    
    return urls[api]
}

/**
 * 
 * @param {*} username 
 * @param {*} passwrod 
 * @returns Login object from Esse3 Api
 */
api.login = (username, passwrod) => {
    /*return new Promise( (resolve, reject) => {
        axios.get(api.getUrl("login"), api.auth())
        .then(async function (response) {
            resolve(response)
        })
        .catch(function (error) {
            console.error(error)
            reject(error)
        })
    })*/

    var url = "https://unica.esse3.cineca.it/e3rest/api/login";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Authorization", "Basic YS5jb3JyaWdhMTpVbmljYTIwMTk=");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    xhr.send();
}

/**
 * 
 * @param {*} stuID 
 * @returns Careers object from Esse3 API
 */
api.careers = async(stuID) => {
    return new Promise( (resolve, reject) => {
        axios.get(api.parse(api.urls.careers, stuID), {}, api.auth())
        .then(async function (response) {
            resolve(response)
        })
        .catch(function (error) {
            console.error(error)
            reject(error)
        })
    })
}

/***
 * @link https://stackoverflow.com/questions/7790811/how-do-i-put-variables-inside-javascript-strings
 * @example parameterizedString("my name is %s1 and surname is %s2", "John", "Doe");
 * @return "my name is John and surname is Doe"
 *
 * @firstArgument {String} like "my name is %s1 and surname is %s2"
 * @otherArguments {String | Number}
 * @returns {String}
 */
api.parse = (...args) => {
    const str = args[0]
    const params = args.filter((arg, index) => index !== 0)
    
    if (!str) return ""
    return str.replace(/%s[0-9]+/g, matchedStr => {
        const variableIndex = matchedStr.replace("%s", "") - 1;
        return params[variableIndex];
    })
}

/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @returns Object for base auth with axios
 */
api.auth = () => {
    const credentials = store.getCredentials()
    
    return {
        //headers: {
        //    contentType: "application/x-www-form-urlencoded"
        //},
        /*auth: {
            username: credentials?.username,
            password: credentials?.password
      }*/
    }
}

export default api