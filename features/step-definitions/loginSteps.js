const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@wdio/globals'); // Use WebdriverIO's expect
const LoginPage = require('../pageobjects/LoginPage');
const InventoryPage = require('../pageobjects/InventoryPage');

Given('I am on the SauceDemo login page', async () => {
    await LoginPage.open();
});

When('I enter valid credentials', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
});

Then('I should see the inventory page', async () => {
    await browser.waitUntil(
        async () => (await browser.getUrl()) === 'https://www.saucedemo.com/inventory.html',
        {
            timeout: 5000,
            timeoutMsg: 'expected URL to be different after 5s'
        }
    );
    const title = await LoginPage.inventoryTitle;
    await expect(await title.getText()).toEqual('Products'); // Use toEqual for WebdriverIO's expect
});

// Assuming you are already logged in at this point
When('I add an item to the cart', async () => {
    await InventoryPage.addItemToCart();
});

Then('I should see the cart with one item', async () => {
    await InventoryPage.goToCart();
    const itemCount = await InventoryPage.cartItemCount;
    await expect(itemCount).toHaveText('1'); // Check that the cart shows 1 item
});

// When('I enter invalid credentials', async () => {
//     await LoginPage.login('invalid_user', 'wrong_password');
// });

// Then('I should see an error message', async () => {
//     const errorMessage = await LoginPage.errorMessage;
//     await expect(errorMessage).toBeDisplayed(); // Check if the error message is displayed
//     const message = await errorMessage.getText(); // Get the text of the error message
//     await expect(message).toContain('Username and password do not match any user in this service'); // Use WebdriverIO's expect
// });
