const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');

//console.log(Object.entries(data))
//console.log(Object.values(data)[0]['url']['urlMain'])

async function waitAndExtractElement(firstClassprice) {
    let options = await page.$$eval(firstClassprice, options => options.map(option => option.textContent))

    return options
}

async function createObjectWithData(firstClassname, firstClassprice) {

    let listItemsNames = await waitAndExtractElement(firstClassname)
    let listItemsPrices = await waitAndExtractElement(firstClassprice)

    //console.log(listItemsNames)
    //console.log(listItemsPrices)

    let obj = []
    listItemsNames.map((elem, index) => {
        obj = [...obj, {
            'name': elem,
            'price': Number(listItemsPrices[index])
        }]
    })

    //console.log(obj);
    //console.log(obj[0]['name']);
    return obj
}

async function searchUrls(firstResult, firstClassname, firstClassprice) {
    let urlFinal = firstResult

    //const browser = await puppeteer.launch({ headless: false })
    const browser = await puppeteer.launch()

    page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(urlFinal)

    let data = await createObjectWithData(firstClassname, firstClassprice)
    console.log(data);

    browser.close()
}

module.exports = {
    searchUrls
}