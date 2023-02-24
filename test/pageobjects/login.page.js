import Page from './page';

// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#root > div > div > div > div.css-1w7v3tn > div > button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue('sanber123@mail.com');
        await this.inputPassword.setValue('sanber123@');
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new loginPage();
