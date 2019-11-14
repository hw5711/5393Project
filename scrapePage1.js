// scrapePage1.js
// this is to get all the titles and prices of the first page
// and print the result on the console
const puppeteer = require("puppeteer");
let scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://books.toscrape.com/");
    await page.waitFor(2000);
    const result = await page.evaluate(() => {
    let data = []; // initialize a array
    // get all the books elements
    let elements = document.querySelectorAll(".product_pod"); 
    for (var element of elements) {
        // title is 5th elements
        let title = element.childNodes[5].innerText; 
        // price is the 7th element
        let price = element.childNodes[7].children[0].innerText; 
        data.push({ title, price }); // add into array
    }
    return data; // return array
    });
    browser.close();
    return result;
};

scrape().then(value => {
    console.log(value); // Success!
});