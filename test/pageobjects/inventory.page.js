import Page from './page';

// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class inventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get containKasirAjaPage () {
        return $('#root > div > div > div.css-tnxwfz > div > h3');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async containKasirAjaPage () {
        await this.this.containKasirAjaPage;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new inventoryPage();
