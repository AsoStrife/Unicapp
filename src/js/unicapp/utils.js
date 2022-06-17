const utils = {}

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


export default utils