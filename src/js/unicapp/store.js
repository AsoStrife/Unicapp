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

store.getSelectedCareer = () => {
    return localStorage.getItem(constants.localstorage.selectedCareer) !== null ?  JSON.parse(localStorage.getItem(constants.localstorage.selectedCareer)) : null
}

store.getSelectedUniversity = () => {
    return localStorage.getItem(constants.localstorage.selectedUniversity) !== null ? JSON.parse(localStorage.getItem(constants.localstorage.selectedUniversity)) : null
}

store.getProfilePic = () => {
    return localStorage.getItem(constants.localstorage.profilePic) !== 'null' ? localStorage.getItem(constants.localstorage.profilePic) : null
}

store.getDarkTheme = () => {
    return localStorage.getItem(constants.localstorage.darkTheme) !== null ? localStorage.getItem(constants.localstorage.darkTheme) === "true" : false
}

store.getCurrentI18n = () => {
    return localStorage.getItem(constants.localstorage.currentI18n) !== 'null' ? localStorage.getItem(constants.localstorage.currentI18n) : constants.i18n.default
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

store.setSelectedCareer = (selectedCareer) => {
    localStorage.setItem(constants.localstorage.selectedCareer, JSON.stringify(selectedCareer))
}

store.setSelectedUniversity = (selectedUniversity) => {
    localStorage.setItem(constants.localstorage.selectedUniversity, JSON.stringify(selectedUniversity))
}

store.setCareers = (careers) => {
    localStorage.setItem(constants.localstorage.careers, JSON.stringify(careers))
}

store.setProfilePic = (profilePic) => {
    localStorage.setItem(constants.localstorage.profilePic, profilePic)
}

store.setDarkTheme = (darkTheme) => {
    typeof darkTheme == "boolean" ? localStorage.setItem(constants.localstorage.darkTheme, darkTheme) : localStorage.setItem(constants.localstorage.darkTheme, false)
}

store.setCurrentI18n = (i18n) => {
    localStorage.setItem(constants.localstorage.currentI18n, i18n)
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

store.clearProfilePic = () => {
    localStorage.setItem(constants.localstorage.profilePic, null)
}

store.clearDarkTheme = () => {
    localStorage.setItem(constants.localstorage.profilePic, null)
}

store.clearCurrentI18n = () => {
    localStorage.setItem(constants.localstorage.currentI18n, null)
}


store.clearAll = () => {
    store.clearCredentials()
    store.clearUser()
    store.clearCareers()
    store.clearSelectedCareer()
    store.clearUniversity()
    store.clearProfilePic()
    store.clearDarkTheme()
    store.clearCurrentI18n()
}


export default store;
