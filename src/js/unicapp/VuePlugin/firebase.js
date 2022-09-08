import constants from "../constants"
import { FirebaseAnalytics } from '@capacitor-firebase/analytics'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/**
 * @doc https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/analytics
 * @author Andrea Corriga 
 * Firebase Vue Plugin
*/

const firebaseApp = initializeApp(constants.firebase)
const analytics = getAnalytics(firebaseApp)

const firebase = { }

firebase.setCurrentScreen = async (screenName) => {
    FirebaseAnalytics.setCurrentScreen({
        screenName: screenName
    })
}
    
firebase.setUserProperty = async (key, value) => {
    FirebaseAnalytics.setUserProperty({
        key: key,
        value: value,
    })
}

firebase.logEvent = async (name, params = undefined) => {
    if(params == undefined){
        FirebaseAnalytics.logEvent({
            name: name,
            app_id: constants.app.package,
            app_version: constants.app.version
        })
    }
    else{
        FirebaseAnalytics.logEvent({
            name: name,
            params: { 
                method: paramas 
            }
        })
    }
    
}

firebase.setEnabled = async () => {
    await FirebaseAnalytics.setEnabled({
      enabled: true,
    })
}
  
firebase.isEnabled = async () => {
    const { enabled } = await FirebaseAnalytics.isEnabled()
    return enabled;
}
  
firebase.resetAnalyticsData = async () => {
    FirebaseAnalytics.resetAnalyticsData()
}

export default {
    install: (Vue, options) => {        
        // define a global property
        Vue.config.globalProperties.$firebaseApp = firebaseApp
        Vue.config.globalProperties.$firebaseAnalytics = analytics

        Vue.config.globalProperties.$firebase = firebase        
    }
}