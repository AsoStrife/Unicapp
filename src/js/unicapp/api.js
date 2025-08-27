import store from './store'
import axios from 'axios'
import constants from './constants'

const middlewareUrl = constants.app.debug
  ? constants.api.middlewareUrlDebug
  : constants.api.middlewareUrlRemote
const middlewareUrlPhoto = constants.app.debug
  ? constants.api.middlewareUrlPhotoDebug
  : constants.api.middlewareUrlPhotoRemote

const api = {}

api.headers = (apiUrl) => {
  const credentials = store.getCredentials()
  const selectedUniversity = store.getSelectedUniversity()

  return {
    headers: {
      'Api-Url': apiUrl,
      University: selectedUniversity?.name,
    },
    auth: {
      username: credentials?.username,
      password: credentials?.password,
    },
  }
}

api.parse = (...args) => {
  const str = args[0]
  const params = args.filter((arg, index) => index !== 0)
  if (!str) return ''
  return str.replace(/%s[0-9]+/g, (matchedStr) => {
    const variableIndex = matchedStr.replace('%s', '') - 1
    return params[variableIndex]
  })
}

api.getUrl = (...params) => {
  const selectedUniversity = store.getSelectedUniversity()
  const universityApiBaseUrl = selectedUniversity?.api_url || selectedUniversity?.url

  const urls = constants.api.esse3
  const endpoint = urls[params[0]]

  params.splice(0, 1)
  params.unshift(endpoint, universityApiBaseUrl)

  return api.parse.apply(null, params)
}

api.getUnicappUrl = (endpoint) => {
  return middlewareUrl + constants.api.unicapp[endpoint]
}

api.universities = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(api.getUnicappUrl('universities'))
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios
      .get(middlewareUrl, api.headers(api.getUrl('login')))
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.careers = async () => {
  const selectedCareer = store.getSelectedCareer()

  return new Promise((resolve, reject) => {
    axios
      .get(
        middlewareUrl,
        api.headers(api.getUrl('careers', selectedCareer?.stuId))
      )
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.people = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(middlewareUrl, api.headers(api.getUrl('people')))
      .then(async function (response) {
        resolve(response.data[0])
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.photo = async () => {
  const user = store.getUser()

  return new Promise((resolve, reject) => {
    axios
      .get(middlewareUrlPhoto, api.headers(api.getUrl('photo', user.persId)))
      .then(async function (response) {
        resolve(response.data.img)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.bookletVotesAvg = async () => {
  const selectedCareer = store.getSelectedCareer()

  return new Promise((resolve, reject) => {
    axios
      .get(
        middlewareUrl,
        api.headers(api.getUrl('bookletVotesAvg', selectedCareer?.matId))
      )
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.booklet = async () => {
  const selectedCareer = store.getSelectedCareer()

  return new Promise((resolve, reject) => {
    axios
      .get(middlewareUrl, api.headers(api.getUrl('booklet', selectedCareer?.matId)))
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.bookletStats = async () => {
  const selectedCareer = store.getSelectedCareer()

  return new Promise((resolve, reject) => {
    axios
      .get(
        middlewareUrl,
        api.headers(api.getUrl('bookletStats', selectedCareer?.matId))
      )
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.taxes = async () => {
  const selectedCareer = store.getSelectedCareer()

  return new Promise((resolve, reject) => {
    axios
      .get(middlewareUrl, api.headers(api.getUrl('taxes', selectedCareer?.stuId)))
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.tests = async () => {
  const selectedCareer = store.getSelectedCareer()

  return new Promise((resolve, reject) => {
    axios
      .get(middlewareUrl, api.headers(api.getUrl('tests', selectedCareer?.matId)))
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

api.isTestBooked = async (adsceId = '') => {
  const selectedCareer = store.getSelectedCareer()

  return new Promise((resolve, reject) => {
    axios
      .get(
        middlewareUrl,
        api.headers(api.getUrl('isTestBooked', selectedCareer?.matId, adsceId))
      )
      .then(async function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

export default api
