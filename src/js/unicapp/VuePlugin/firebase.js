import constants from '../constants'
import { FirebaseAnalytics } from '@capacitor-firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseApp = initializeApp(constants.firebase)
const analytics = typeof window !== 'undefined' ? getAnalytics(firebaseApp) : null

const firebase = {}

firebase.setCurrentScreen = async (screenName) => {
  try {
    await FirebaseAnalytics.setCurrentScreen({ screenName })
  } catch {}
}

firebase.setUserProperty = async (key, value) => {
  try {
    await FirebaseAnalytics.setUserProperty({ key, value })
  } catch {}
}

firebase.logEvent = async (name, params = undefined) => {
  try {
    if (params == undefined) {
      await FirebaseAnalytics.logEvent({
        name,
        app_id: constants.app.package,
        app_version: constants.app.version,
      })
    } else {
      await FirebaseAnalytics.logEvent({ name, params })
    }
  } catch {}
}

firebase.setEnabled = async () => {
  try {
    await FirebaseAnalytics.setEnabled({ enabled: true })
  } catch {}
}

firebase.isEnabled = async () => {
  try {
    const { enabled } = await FirebaseAnalytics.isEnabled()
    return enabled
  } catch {
    return false
  }
}

firebase.resetAnalyticsData = async () => {
  try {
    await FirebaseAnalytics.resetAnalyticsData()
  } catch {}
}

export default {
  install: (Vue) => {
    Vue.config.globalProperties.$firebaseApp = firebaseApp
    Vue.config.globalProperties.$firebaseAnalytics = analytics
    Vue.config.globalProperties.$firebase = firebase
  },
}
