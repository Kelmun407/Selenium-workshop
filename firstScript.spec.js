const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

async function firstTest() {
    //starting a session
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    //opening the url
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
    //finding the element,There are a bunch of types of information about the browser you can request, 
    //including window handles, browser size / position, cookies, alerts, etc.
    let title = await driver.getTitle();
    assert.equal("Web form", title);
    //Synchronizing the code with the current state of the browser is one of the biggest challenges with Selenium,
    //and it is one of the most common causes of test failures.Essentially you want to make sure that the element 
    //is on the page before you attempt to locate it and the element is in an interactable state before you 
    //attempt to interact with it. implicit it rarely used. but easiest to demonstrate.
    await driver.manage().setTimeouts({implicit: 500});

    //finding the element
    let textBox = await driver.findElement(By.name('my-text'));
    let submitButton = await driver.findElement(By.css('button'));
    //take action on the element,There are only a handful of actions to take on an element.
    await textBox.sendKeys('Selenium');
    await submitButton.click();
    //request element information
    let message = await driver.findElement(By.id('message'));
    let value = await message.getText();
    assert.equal("Received!", value);
    await driver.quit();

};

firstTest();