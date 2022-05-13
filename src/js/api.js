import store from './store'
import axios from 'axios'
import universities from './universities'
import $ from "jquery";



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
api.login = (username, password) => {
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
    //https://a.corriga1:Unica2019@unica.esse3.cineca.it/e3rest/api/login
    /*
    fetch('https://unica.esse3.cineca.it/e3rest/api/login', 
    {
        method: 'GET',
        headers: { 
            //'Content-Type': 'application/json',
            //'Access-Control-Allow-Credentials': true,
            //'Access-Control-Allow-Origin': true,
            //"Authorization": "Basic YS5jb3JyaWdhMTpVbmljYTIwMTk="
        },
        //mode: 'no-corscors', 
        credentials: 'omit',
        auth: {
            username: 'a.corriga1',
            password: 'Unica2019'
        }
        //.then(response => response.json())
    .then(data => console.log(data));
    }
    })*/

    $.ajax({
        type: 'GET',
        url: 'https://unica.esse3.cineca.it/e3rest/api/login',
//        url: 'https://unica.esse3.cineca.it/e3rest/api/libretto-service-v2/libretti/377426/righe',
        dataType: 'json',
        //whatever you need
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic YS5jb3JyaWdhMTpVbmljYTIwMTk=');
        },
        success: function (response) {
            console.log(response)
        },
        error: function (e) {
            console.log(e)
        }
    });

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