import constants from "./constants"

const store = {}

//
// Getter
//
store.getCredentials = () => {
    return localStorage.getItem(constants.localstorage.credentials) !== null ? JSON.parse(localStorage.getItem(constants.localstorage.credentials)) : null
}

store.getUser = () => {
    return localStorage.getItem(constants.localstorage.user) !== null ? JSON.parse(localStorage.getItem(constants.localstorage.user)) : null
}

store.getCareers = () => {
    return localStorage.getItem(constants.localstorage.careers) !== null ? JSON.parse(localStorage.getItem(constants.localstorage.careers)) : null
}

store.getCareer = () => {
    return state.selectedCareer !== null ? state.careers[state.selectedCareer] : null
}

store.getSelectedCareer = () => {
    return localStorage.getItem(constants.localstorage.selectedCareer) !== null ? localStorage.getItem(constants.localstorage.selectedCareer) : null
}

store.getSelectedUniversity = () => {
    return localStorage.getItem(constants.localstorage.selectedUniversity) !== null ? JSON.parse(localStorage.getItem(constants.localstorage.selectedUniversity)) : null
}

//
// Settter
// 

store.setCredentials = (username, password) => {
    localStorage.setItem(constants.localstorage.credentials, JSON.stringify({
        username: username, 
        password: password
    }))
}

store.setUser = (user) => {
    localStorage.setItem(constants.localstorage.user, JSON.stringify(user))
}

store.setCareers = (careers) => {
    localStorage.setItem(constants.localstorage.careers, JSON.stringify(careers))
}

store.setSelectedCareer = (selectedCareer) => {
    localStorage.setItem(constants.localstorage.selectedCareer, selectedCareer)
}

store.setSelectedUniversity = (selectedUniversity) => {
    localStorage.setItem(constants.localstorage.selectedUniversity, JSON.stringify(selectedUniversity))
}
    
//
// Cleaner
// 
store.clearCredentials = () => {
    localStorage.setItem(constants.localstorage.credentials, null)
}

store.clearUser = () => {
    localStorage.setItem(constants.localstorage.user, null)
}

store.clearCareers = () => {
    localStorage.setItem(constants.localstorage.careers, null)
}

store.clearSelectedCareer = () => {
    localStorage.setItem(constants.localstorage.selectedCareer, null)
}

store.clearUniversity = () => {
    localStorage.setItem(constants.localstorage.selectedUniversity, null)
}

store.clearAll = () => {
    store.clearCredentials()
    store.clearUser()
    store.clearCareers()
    store.clearSelectedCareer()
    store.clearUniversity()
}


export default store;
