const {Builder, By, until} = require('selenium-webdriver');



async function addRemoveElements() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://the-internet.herokuapp.com/add_remove_elements/");        
        let addButton = await driver.findElement(By.css(".example button"))
        await addButton.click();
        let deleteButton = await driver.findElement(By.css("#elements button"))
        await driver.wait(until.elementIsVisible(deleteButton), 5000);
        await deleteButton.click();
} finally {
    await driver.quit();
}};

addRemoveElements();
