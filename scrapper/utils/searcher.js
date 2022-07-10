const puppeteer = require('puppeteer');

async function waitAndExtractElement(firstClassprice) {
    let options = await page.$$eval(firstClassprice, options => options.map(option => option.textContent))
    return options
}

async function createObjectWithData(firstClassname, firstClassprice) {

    let listItemsNames = await waitAndExtractElement(firstClassname)
    let listItemsPrices = await waitAndExtractElement(firstClassprice)

    let obj = []
    listItemsNames.map((elem, index) => {
        obj = [...obj, {
            'name': elem,
            'price': Number(listItemsPrices[index])
        }]
    })

    return obj
}

async function searchUrls(firstResult, firstClassname, firstClassprice) {
    let urlFinal = firstResult

    const browser = await puppeteer.launch()

    page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(urlFinal)

    let data = await createObjectWithData(firstClassname, firstClassprice)
    browser.close()
    return data
}

module.exports = {
    searchUrls
}