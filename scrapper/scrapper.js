const {
    getPath,
    getNameSellers,
    getClassNamesSellers,
    getClassPricesSellers,
} = require('./utils/functions')
const { searchUrls } = require('./utils/searcher');

let searchProducts = (async (productName = "3060 ti") => {
    //get path and json
    let data = getPath()

    //each seller returns the Url
    let result = getNameSellers(data, productName)

    //get each class of name and price
    let classNames = getClassNamesSellers(data)
    let classPrice = getClassPricesSellers(data)

    //
    let firstResult = result[0];
    let firstClassname = classNames[0];
    let firstClassprice = classPrice[0];

    //
    return searchUrls(firstResult, firstClassname, firstClassprice)
})

searchProducts().then(a => console.log(a))
