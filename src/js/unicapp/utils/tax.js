import constants from '../constants'

const tax = {}

tax.getStatus = (t) =>{
    switch(t?.semaforo){
        case constants.taxes.greenLight: 
            return constants.emoji.greenCirle
        case constants.taxes.redLight: 
            return constants.emoji.redCirle
    }
}

tax.getStatusBg = (t) =>{    
    switch(t?.semaforo){
        case constants.taxes.greenLight: 
            return 'success'
        case constants.taxes.redLight: 
            return 'danger'
    }
}

export default tax