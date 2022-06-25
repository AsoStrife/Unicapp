import constants from '../constants'

const exam = {}

exam.getStatus = (e) => {
    return e.statoDes == constants.tests.bookable ? constants.emoji.greenCirle : constants.emoji.redCirle;
}

exam.getGrade = (e) => {
                
    if(e?.esito?.voto != null)
        return e.esito.voto + (e.esito.lodeFlg == 1 ? constants.booklet.laudeSymbol : "")
    
    if(e?.esito?.tipoGiudCod != "")
        return e.esito.tipoGiudCod

    return constants.emoji.redCirle
}

exam.getBgGrade = (e) => {
    if(e?.esito?.voto != null || e?.esito?.tipoGiudCod != "")
        return 'success'
        
    return 'danger'
}

exam.getBgBookable = (e) => {
    if(e?.statoDes == "Prenotazioni Aperte")
        return 'success'
        
    return 'danger'
}

export default exam