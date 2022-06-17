const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');

(async () => {

    const urlMain = `https://listado.mercadolibre.com.ar/`
    const product = "iphone#D[A:iphone]"
    const urlFinal = `${urlMain}${product}`

    const browser = await puppeteer.launch({ headless: false })
    page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(urlFinal)

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
    //let listItems, listPrecio, listImagen
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
    /*
    async function getInnerItems(items){
        for (let i = 0; i < items.length; i++) {
            let elem = items[i]
            let textElem = await page.evaluate(
                elem => {
                    elem.textContent
                    console.log(elem.textContent)
                },
                elem
            )
            arrItems.push(textElem)
            //console.log('a')
        }
        //return arrItems
    }
    */


})()
//https://www.youtube.com/watch?v=TDypV9ymmK0

//https://www.youtube.com/playlist?list=PLGreOtbNU07rDURvnQpDaT3XokxlranUQ

//module.exports = initialization