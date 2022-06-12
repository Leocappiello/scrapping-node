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
    /*
    //await page.setUserAgent(header)
    
 
    //await browser.close()
    
 
 
    await page.waitForSelector('.ui-search-results')
 
    const objectNextButton = await page.$('.andes-pagination__button--next a')
 
    const getUrl = await page.evaluate(objectNextButton => objectNextButton.getAttribute('href'),
        objectNextButton);
 
    const listaDeItems = await page.$$('.ui-search-layout__item')
    */
})()

//module.exports = initialization