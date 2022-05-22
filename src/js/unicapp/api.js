import store from './store'
import axios from 'axios'
import universities from './universities'
import constants from './constants'

const middlewareUrl = constants.api.middlewareUrl
const middlewareUrlPhoto = constants.api.middlewareUrlPhoto

const api = {}


/**
 * Return the api url for the selected university
 * @param {*} endpoint 
 * @returns str
 */
api.getUrl = (endpoint, param = "") => {
    store.getSelectedUniversity()

    const selectedUniversity = store.getSelectedUniversity()
    const baseUrl = selectedUniversity?.url
    const urls = constants.api.esse3
    const url = urls[endpoint]
    
    return param == "" ? api.parse(url, baseUrl) : api.parse(url, baseUrl, param)
}

/**
 * Call the login Api
 * @param {*} username 
 * @param {*} passwrod 
 * @returns Login object from Esse3 Api
*/
api.login = (username, password) => {
    return new Promise( (resolve, reject) => {
        axios.get(middlewareUrl, api.headers(api.getUrl("login")))
        .then(async function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            console.error(error)
            reject(error)
        })
    })
}

/**
 * 
 * @returns Careers object from Esse3 API
*/
api.careers = async() => {
    const selectedCareer = store.getSelectedCareer()

    return new Promise( (resolve, reject) => {
        axios.get(middlewareUrl, api.headers(api.getUrl("careers", selectedCareer?.stuId)))
        .then(async function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            console.error(error)
            reject(error)
        })
    })
}

/**
 * 
 * @returns People object from Esse3 API
*/
api.people = async() => {
    
    return new Promise( (resolve, reject) => {
        axios.get(middlewareUrl, api.headers(api.getUrl("people")))
        .then(async function (response) {
            resolve(response.data[0])
        })
        .catch(function (error) {
            console.error(error)
            reject(error)
        })
    })
}

/**
 * 
 * @returns Profile pic in base64 string
 */
api.photo = async() => {
    const user = store.getUser()

    return new Promise( (resolve, reject) => {
        axios.get(middlewareUrlPhoto, api.headers(api.getUrl("photo", user.persId)))
        .then(async function (response) {
            resolve(response.data.img)
        })
        .catch(function (error) {
            console.error(error)
            reject(error)
        })
    })
}

api.bookletVotesAvg = async() => {
    const selectedCareer = store.getSelectedCareer()
  
    return new Promise( (resolve, reject) => {
        axios.get(middlewareUrl, api.headers(api.getUrl("bookletVotesAvg", selectedCareer.matId)))
        .then(async function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            console.error(error)
            reject(error)
        })
    })
}



/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @returns Object for base auth + Api-Url for Middleware Request
*/
api.headers = (apiUrl) => {
    const credentials = store.getCredentials()
    
    return {
        headers: {
            'Api-Url': apiUrl
        },
        auth: {
            username: credentials?.username,
            password: credentials?.password
      }
    }
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

export default api