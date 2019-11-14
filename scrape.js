// scrape.js
// this is to get the title and price of the first Book
// and print the result on the console
const puppeteer = require("puppeteer");
let scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://books.toscrape.com/");
    await page.waitFor(2000);
    // click the first book
    await page.click(
        "#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img"
    );
    await page.waitFor(1000);
    const result = await page.evaluate(() => {
        // get the book title
        let title = document.querySelector("h1").innerText;  
        // get the book price
        let price = document.querySelector(".price_color").innerText; 
        return {  // return as json result
            title,
            price
        };
    });
    await page.waitFor(1000);
    browser.close();
    return result;
};
scrape().then(value => {
    console.log(value); // print result
});
