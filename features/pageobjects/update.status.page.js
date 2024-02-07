const { $ } = require('@wdio/globals')

class UpdateStatusPage {

    get statusSelector () {
        return $('.form-control.ng-pristine.ng-empty.ng-invalid.ng-invalid-required')
    }

    get reasonInputBox () {
        return $('.form-control.ng-pristine.ng-untouched.ng-valid.ng-empty')
    }

    async updateStatusUsingSelector (status) {
        await this.statusSelector.click();
        const optionsList = await $('=' + status)
        await optionsList.selectByVisibleText(status);
    }

    async updateReason (reason) {
        await this.reasonInputBox.setValue(reason)
    }
}

module.exports = new UpdateStatusPage();
