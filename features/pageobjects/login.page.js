const { $ } = require('@wdio/globals')

class LoginPage {

    get inputUsername () {
        return $('#exampleInputEmail1');
    }

    get inputPassword () {
        return $('#exampleInputPassword1');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
