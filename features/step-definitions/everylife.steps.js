const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const DashBoardPage = require('../pageobjects/dashboard.page');
const ResidentsPage = require('../pageobjects/residents.page');
const CarePackagePage = require('../pageobjects/care.package.page');
const AddResidentPage = require('../pageobjects/add.resident.page');
const ResidentDetailsPage = require('../pageobjects/resident.details.page');
const UpdateStatusPage = require('../pageobjects/update.status.page');

Given(/^I have logged into the PASS Genius website as a care manager$/, async () => {
	await browser.url('https://qaapp.passgenius.com/logon')
    await LoginPage.login(**********, **********)
});

When(/^I wait for a few seconds$/, async () => {
	await browser.pause(5000)
});

When(/^I have clicked on the Residents tab$/, async () => {
	await DashBoardPage.clickResidents()
});

When(/^I have clicked on the Add New Resident button$/, async () => {
    await ResidentsPage.clickAdd()
});

When(/^I have selected (.*) for the resident (.*) on the Add Resident page$/, async (value, dropDownFieldName) => {
    await AddResidentPage.selectValueDetailsPage(value, dropDownFieldName)
});

When(/^I have entered (.*) for the resident (.*) on the Add Resident page$/, async  (value, inputBoxName) => {
    await AddResidentPage.enterValueDetailsPage(value, inputBoxName)
});

When(/^I have clicked on the Save button$/, async () => {
    await AddResidentPage.clickSave()
});

When(/^I have clicked on the resident's Details tab$/, async () => {
    await CarePackagePage.clickDetailsTab()
});

When(/^I have clicked on the tab for the resident named (.*) (.*) (.*)$/, async (title, firstName, surname) => {
    await AddResidentPage.clickOnResidentTab(title, firstName, surname)
});

When(/^I have set the Status to (.*) on the resident details page with (.*)$/, async (status, reason) => {
    await ResidentDetailsPage.clickUpdate()
    await UpdateStatusPage.updateStatusUsingSelector(status)
    //await UpdateStatusPage.updateReason(reason)
});

When(/^I have searched for the resident (.*) (.*)$/, async (firstName, surname) => {
    const fullName = firstName + ' ' + surname
    const searchBar = await $('#filterTerm')
    await searchBar.setValue(fullName)
});

Then(/^the resident details page displays the correct data for the new resident which matches the resident details from the table (.*) $/, async (table) => {
    data = table.rowsHash()
    const storedFirstName = await $('#' + firstname).getValue()
    await expect(storedFirstName).toEqual(dataij);
    const storedSurName = await $('#' + surname).getValue()
    await expect(storedSurName).toEqual(dataij);
});