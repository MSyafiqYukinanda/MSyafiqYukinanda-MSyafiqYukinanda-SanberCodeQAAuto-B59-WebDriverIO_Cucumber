// pageobjects/LoginPage.js

class LoginPage {
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }
    get inventoryTitle() { return $('.title'); }

    async open() {
        return browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
