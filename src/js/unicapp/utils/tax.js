import constants from '../constants'

const tax = {}

tax.getStatus = (t) =>{
    switch(t?.semaforo){
        case constants.taxes.greenLight: 
            return tax.checkPagatoFlg(t?.pagatoFlg)
        case constants.taxes.redLight: 
            return constants.emoji.redCirle
        default: 
            return constants.emoji.redCirle
    }
}

tax.getStatusBg = (t) =>{    
    switch(t?.semaforo){
        case constants.taxes.greenLight: 
            return tax.checkPagatoFlgBG(t?.pagatoFlg)
        case constants.taxes.redLight: 
            return 'danger'
    }
}

tax.checkPagatoFlg = (pagatoFlg) => {
    return pagatoFlg ? constants.emoji.greenCirle : constants.emoji.redCirle
}

tax.checkPagatoFlgBG = (pagatoFlg) => {
    return pagatoFlg ? 'success' : 'danger'
}

export default tax