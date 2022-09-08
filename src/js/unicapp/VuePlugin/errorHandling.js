import { f7, f7ready } from 'framework7-vue'
import constants from '../constants'

// Import App Component
import { ref, onMounted } from 'vue'


let errorHandling = {}

errorHandling.handle = (error, $i18n) => {
    console.error(error)
    f7ready(() => {
        switch(error?.response?.data?.retErrMsg){
            case constants.esse3Errors.securityFailed: 
                securityFailed(constants.esse3Errors.securityFailed)
                break
            case constants.esse3Errors.loginError: 
                loginError($i18n)
                break
            default: 
                general($i18n)
        }
    })
}

let general = ($i18n) => {
    if($i18n == null)
        return

    f7.toast.create({
        text: $i18n?.t('message.general.error'),
        closeTimeout: 3000,
        destroyOnClose: true,
        position: 'bottom',
    }).open()
}

let loginError = ($i18n) => {
    if($i18n == null)
        return

    f7.toast.create({
        text: $i18n?.t('message.login.loginWrong'),
        closeTimeout: 3000,
        destroyOnClose: true,
        position: 'bottom',
    }).open()
}

let securityFailed = (str) => {
    f7.views.main.router.navigate('/error/', {
        reloadAll: true,
        props: {
            errorMsg: str
        }
    })
}

export default {
    install: (Vue, options) => {        
        Vue.config.globalProperties.$errorHandling = errorHandling        
    }
}