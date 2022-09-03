import { f7 } from 'framework7-vue'
import constants from '../js/unicapp/constants'

let error = {}

error.handling = (error) => {
    if(error?.response?.data?.retErrMsg == constants.esse3Errors.securityFailed){
        securityFailed(constants.esse3Errors.securityFailed)
    }
    
}

let securityFailed = (str) => {
    if(error?.response?.data?.retErrMsg == constants.esse3Errors.securityFailed){
        f7.views.main.router.navigate('/error/', {
            reloadAll: true,
            props: {
                errorMsg: error.response.data.retErrMsg
            }
        })
    }
}

export default error