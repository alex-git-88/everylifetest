const { $ } = require('@wdio/globals')


class ResidentsPage {
  
    get btnAdd () {
        return $('.btn.btn-primary.btn-card.action-add.ng-binding');
    }

    async clickAdd () {
        await this.btnAdd.click();
    }
}

module.exports = new ResidentsPage();
