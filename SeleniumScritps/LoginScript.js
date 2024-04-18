const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


async function loginTest() {
    let options = new chrome.Options();
    options.addArguments("--incognito");

    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    try{
        await driver.get("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        

    } finally {
    }

}
loginTest();

//note:because the page opens with an auth dialog, the pass and username is passed in the url in .get