// import inventoryPage from "../pageobjects/inventory.page";
// import loginPage from "../pageobjects/login2.page";


describe('Test Suite login to Kasir Aja',() =>{
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
    it('login with empty data',async()=>{
        await browser.url('');
        await browser.pause(20)

        await $("#email").setValue('')
        await $("#password").setValue('')
        await browser.pause(10)
        await $("#root > div > div > div > div.css-1w7v3tn > div > button").click()
        await browser.pause(10)
        await $("#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3")
        await browser.pause(10)
    })
    it('login with valid email',async()=>{
        // await page.open()
        await browser.url('');
        await browser.pause(10)

        // login.page.login('email', 'password');
        await $("#email").setValue('sanber123@mail.com')
        await $("#password").setValue('sanber123@')
        await browser.pause(10)
        // login.page.btnSubmit;
        await $("#root > div > div > div > div.css-1w7v3tn > div > button").click()
        await browser.pause(10)
        await browser.url('https://kasirdemo.belajarqa.com/dashboard');
        await browser.pause(5)
        // await $("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-trlcwy > div:nth-child(1) > div > dl > dt")
        // await browser.pause(5)
    })
    
})