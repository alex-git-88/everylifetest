const { $ } = require('@wdio/globals')

class AddResidentPage {

    get btnSave () {
        return $('.btn.btn-success.btn-card.action-save.ng-binding');
    }

    get title () {
        return $('#title');
    }

    get firstName () {
        return $('#firstname');
    }

    get surname () {
        return $('#surname');
    }

    get knownAs () {
        return $('#nickname');
    }

    get sex () {
        return $('#sex');
    }

    get dob () {
        return $('#dob');
    }

    get socialServicesNumber () {
        return $('#ssNumber');
    }

    get weight () {
        return $('#admissionWeightInKilograms');
    }

    get height () {
        return $('#admissionHeightInMeters');
    }

    get startDate () {
        return $('#startDate');
    }

    get address1 () {
        return $('#address1');
    }

    get address2 () {
        return $('#address2');
    }

    get city () {
        return $('#city');
    }

    get county () {
        return $('#county');
    }

    get postcode () {
        return $('#postcode');
    }

    get country () {
        return $('#country');
    }

    get tel () {
        return $('#tel');
    }

    get email () {
        return $('#email');
    }

    get mobile () {
        return $('#mobile');
    }

    get accessDetails () {
        return $('#accessDetails');
    }

    get allergies () {
        return $('#allergies');
    }

    get nextOfKin () {
        return $('#nextofkin');
    }

    get nextOfKinTel () {
        return $('#nextofkintel');
    }

    get doctor () {
        return $('#doctor');
    }

    get surgery () {
        return $('#surgery');
    }

    get surgeryTel () {
        return $('#surgerytel');
    }

    async selectValueDetailsPage (value, dropDownFieldName) {
        const dropdown = await $('#' + dropDownFieldName)
        await dropdown.selectByVisibleText(value);
    }

    async enterValueDetailsPage (value, inputBoxName) {
        const inputBox = await $('#' + inputBoxName)
        await inputBox.setValue(value)
    }

    async clickSave () {
        await this.btnSave.click();
    }

    async clickOnResidentTab (title, firstName, surname) {
        const fullName = title + ' ' + firstName + ' ' + surname
        const element = await $('=' + fullName)
        await element.click()
    }

}

module.exports = new AddResidentPage();
