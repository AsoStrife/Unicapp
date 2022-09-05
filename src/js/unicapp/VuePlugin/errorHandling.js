import { f7, f7ready } from 'framework7-vue'
import constants from '../constants'

let errorHandling = {}

errorHandling.handle = (error) => {
    console.log(error)

    f7ready(() => {
        let str = error?.response?.data?.retErrMsg

        switch(str){
            case constants.esse3Errors.securityFailed: 
                securityFailed(constants.esse3Errors.securityFailed)
                break
            case constants.esse3Errors.loginError: 
            loginError(constants.esse3Errors.loginError)
                break
            default: 
                general()
        }
    })
}

let general = () => {
    f7.toast.create({
        text: self.$t('message.general.error'),
        closeTimeout: 3000,
        destroyOnClose: true,
        position: 'bottom',
    }).open()
}

let loginError = () => {
    f7.toast.create({
        text: self.$t('message.login.loginWrong'),
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