const path = require('path')
const fs = require('fs')
const nameReplace = "productoScrap"

function getValueNameSellers(data, property){
    let arr = []

    Object.keys(data).forEach((elem) => {
        arr.push(data[elem][property])
    })
    return arr
}

function getClassNamesSellers(data) {
    return getValueNameSellers(data, 'className')
}

function getClassPricesSellers(data) {
    return getValueNameSellers(data, 'classPrice')
}

function getNameSellers(data, productName) {
    let arr = []
    Object.keys(data).forEach((elem) => {
        let result = returnValuesUrl(data, productName, elem)
        arr.push(result)
    })
    return arr
}

function getPath() {
    let urlJSON = path.join(__dirname, '/../resource/example.json')
    let data = fs.readFileSync(urlJSON)
    data = JSON.parse(data)
    return data
}

function returnValuesUrl(data, productName, seller) {
    let result = ''
    result = data[seller].url.urlMain
    result = replaceGenericValues(result, productName, seller, data)
    return result
}

function deleteWhitespaces(result, productName) {
    result = result.replaceAll(nameReplace, productName).replace(/\s\s+/g, ' ')
    return result
}

function splitAndDeleteLastCharacter(splitted, data, seller) {
    separator = data[seller].separator
    if (splitted.charAt(splitted.length - 1) == '-' || splitted.charAt(splitted.length - 1) == ' ') {
        splitted = splitted.substring(0, splitted.length - 1)
    }
    splitted = splitted.split(' ').join(separator);
    return splitted
}

function replaceGenericValues(result, productName, seller, data) {
    splitted = deleteWhitespaces(result, productName)
    splitted = splitAndDeleteLastCharacter(splitted, data, seller)
    return splitted
}

module.exports = {
    getPath,
    returnValuesUrl,
    replaceGenericValues,
    getNameSellers,
    getClassNamesSellers,
    getClassPricesSellers,
}