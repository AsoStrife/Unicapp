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

export default tax