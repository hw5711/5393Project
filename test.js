const puppeteer = require('puppeteer');
const account = 'leo5n';
const password = 'xxxxxx';  // false password
let test =  async () => {
  const browser = await puppeteer.launch( {headless:false}); 
  const page = await browser.newPage(); 
  await page.waitFor(2000);
  await page.goto('http://www.leo5n.com/admin');
  //await page.type('username', account);    
  await page.type('body > div > div > div > div > form > div.ui.segment > div:nth-child(1) > div > input[type=text]', account);    
  await page.type('body > div > div > div > div > form > div.ui.segment > div:nth-child(2) > div > input[type=password]', password);
  await page.click('body > div > div > div > div > form > div.ui.segment > button');
  await page.waitForNavigation({
    waitUntil: 'load'
  });
  await page.screenshot({path: 'example.png'});
  await page.waitFor(2000);
  await browser.close();
  return "OK";
};

test().then(value => {
    console.log(value); // print result
});