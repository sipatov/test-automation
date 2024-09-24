import MainFlowersPage from "../pageObject/mainFlowersPage"



describe('My Flowers App Test', () => {
    it('I click cart button', async () => {
        await MainFlowersPage.clickButtonCart();
        await MainFlowersPage.clickButtonOrders();
        await MainFlowersPage.clickButtonFavorites();
        await MainFlowersPage.clickButtonProfile();

        await browser.pause(5000);



    })
})
