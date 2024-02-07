const { $ } = require('@wdio/globals')

class CarePackagePage {

    get btnDetails () {
        return $('=Details');
    }

    async clickDetailsTab () {
        await this.btnDetails.click();
    }

}

module.exports = new CarePackagePage();
