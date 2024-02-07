const { $ } = require('@wdio/globals')


class DashBoardPage {

    get btnResidents () {
        return $('=Residents');
    }

    async clickResidents () {
        await this.btnResidents.click();
    }
}

module.exports = new DashBoardPage();
