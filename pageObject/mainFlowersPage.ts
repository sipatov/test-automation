import { $ } from '@wdio/globals'
import Page from './page';

class MainFlowersPage extends Page {

    public get buttonCart() {
        return $("//android.view.View[@content-desc='CartTabView']")
    }

    public get buttonOrders() {
        return $("//android.view.View[@content-desc='OrderHistoryTabView']")
    }

    public get buttonFavorites() {
        return $("//android.view.View[@content-desc='FavoritesView']")
    }

    public get buttonProfile() {
        return $("//android.view.View[@content-desc='ProfileTabView']")
    }

    public async clickButtonCart() {
        await this.buttonCart.click();
    }

    public async clickButtonOrders() {
        await this.buttonOrders.click();
    }

    public async clickButtonFavorites() {
        await this.buttonFavorites.click();
    }

    public async clickButtonProfile() {
        await this.buttonProfile.click();
    }
}

export default new MainFlowersPage();
