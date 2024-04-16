const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
});