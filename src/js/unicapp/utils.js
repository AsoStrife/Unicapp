import tax from './utils/tax'
import exam from './utils/exam'

const utils = {}

utils.tax = tax 
utils.exam = exam 

/**
 * Transform a sentence like: this is my sentence
 * into: This Is My Sentence
 * @param {*} str 
 * @returns str
 */
utils.toProperCase = (str) => {
    if(str == null || str == "")
        return ""
        
    return str.replace(
        /\w\S*/g,
        function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    )
}

utils.removeTimeFromString = (string) => {
    if(string === "")
        return ""

    return string.split(" ")[0]
}



export default utils