const {
    getPath,
    getNameSellers,
    getClassNamesSellers,
    getClassPricesSellers,
} = require('./utils/functions')
const { searchUrls } = require('./utils/searcher');

(async () => {
    //example
    let productName = "3060 ti"

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
    searchUrls(firstResult, firstClassname, firstClassprice)

    //
    /*
    //click "nuevo"
    await page.waitForSelector('a[class~="ui-search-link"][aria-label="Nuevo"]')
    await page.click('a[class~="ui-search-link"][aria-label="Nuevo"]')


    //click desplegable ordenar
    page.once('load', async () => {
        await page.waitForSelector('.andes-dropdown__trigger')
        await page.click('.andes-dropdown__trigger')
    })


    //click "ordenar menor precio"
    await page.waitForSelector('li[id~="andes-dropdown-más-relevantes-list-option-price_asc"]')
    await page.click('li[id~="andes-dropdown-más-relevantes-list-option-price_asc"]')

    //seleccionar precios ML
    let arrItems = arrPrecio = arrImagen = []

    let getInfo = async () => {
        let result = page.once('load', async () => {
            await page.waitForSelector('.ui-search-item__title')
            listItems = await page.$$('.ui-search-item__title')
            await page.waitForSelector('.price-tag-fraction')
            listPrecio = await page.$$('.price-tag-fraction')
            await page.waitForSelector('.ui-search-result-image__element')
            listImagen = await page.$$('.ui-search-result-image__element')
           
            return listItems
        })


        let options = await page.$$eval('.ui-search-item__title', options => options.map(option => option.textContent))

        return options
    }

    let listItems = await getInfo()
    console.log(listItems)
    */

})()
//https://www.youtube.com/watch?v=TDypV9ymmK0

//https://www.youtube.com/playlist?list=PLGreOtbNU07rDURvnQpDaT3XokxlranUQ

//module.exports = initialization