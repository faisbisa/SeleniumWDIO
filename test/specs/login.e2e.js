import inventoryPage from "../pageobjects/inventory.page";
import loginPage from "../pageobjects/login2.page";


describe('Test Suite login to Kasir Aja',() =>{
    it('login with valid email',async()=>{
        await page.open()
        // await browser.url('https://kasirdemo.belajarqa.com');
        await browser.pause(20)

        login.page.login('email', 'password');
        // await $("inputUsername").setValue('email')
        // await $("inputPassword").setValue('password')
        await browser.pause(10)
        login.page.btnSubmit;
        // await $("btnSubmit").click()
        await browser.pause(10)
        inventoryPage.containKasirAjaPage;
        await browser.pause(10)
    })
    it('login with invalid password',async()=>{
        await browser.url('');
        await browser.pause(20)

        await $("#email").setValue('sanber123@mail.com')
        await $("#password").setValue('sanber123')
        await browser.pause(10)
        await $("#root > div > div > div > div.css-1w7v3tn > div > button").click()
        await browser.pause(10)
        await $("#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3")
        await browser.pause(10)
})
})