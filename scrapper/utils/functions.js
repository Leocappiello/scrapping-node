const path = require('path')
const fs = require('fs')

function getPath() {
    let urlJSON = path.join(__dirname, '/../resource/example.json')
    let data = fs.readFileSync(urlJSON)
    data = JSON.parse(data)
    return data
}

function returnValuesUrl(data) {
    let result = ''
    Object.values(data.mercadolibre.url).map(el => {
        result += el
    
    })
    return result
}

function deleteWhitespaces(result, productName) {
    result = result.replaceAll("productoScrap", productName).replace(/\s\s+/g, ' ')
    return result
}

function splitAndDeleteLastCharacter(splitted) {
    if (splitted.charAt(splitted.length - 1) == '-' || splitted.charAt(splitted.length - 1) == ' ') {
        splitted = splitted.substring(0, splitted.length - 1)
    }
    splitted = splitted.split(' ').join('-');
    return splitted
}

function replaceGenericValues(result, productName) {
    splitted = deleteWhitespaces(result, productName)
    splitted = splitAndDeleteLastCharacter(splitted)
    return splitted
}

module.exports = {
    getPath,
    returnValuesUrl,
    replaceGenericValues
}