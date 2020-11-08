var webdriver = require('selenium-webdriver'),
    { describe, it, beforeEach, before, afterEach, after } = require('selenium-webdriver/testing');
var By = webdriver.By;
var until = webdriver.until;
var driver = webdriver;

describe('this is some awesome testing', function () {
    this.timeout(50000);
    beforeEach(function () {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get ('https://library-app.firebaseapp.com');
    });

    afterEach(function () {
        driver.quit();
    });

    it('can take email address', function () {
        var submintBtn = driver.findElement(By.css('.btn-primary'));
        var emailField = driver.findElement(By.css('.ember-text-field'));

        emailField.sendKeys('tester@test.com');

        driver.wait(function () {
            return submintBtn.getCssValue('opacity').then(function (opacity) {
                return opacity === '1';
            }, 15000);
        });
        submintBtn.click();
    });

    it('can show an alert when email provided and submitted', function () {
        var submintBtn = driver.findElement(By.css('.btn-primary'));
        var emailField = driver.findElement(By.css('.ember-text-field'));

        emailField.sendKeys('tester@test.com');
        submintBtn.click();

        driver.wait(until.elementLocated(By.css('.alert')), 5000).getText().then(function (txt) {
            console.log('The alert reads: \"' + txt + '\".');
        });
    });

    it('can clear the email field', function () {
        var submintBtn = driver.findElement(By.css('.btn-primary'));
        var emailField = driver.findElement(By.css('.ember-text-field'));

        emailField.sendKeys('thisiswrong@email.com');
        driver.wait(function () {
            return submintBtn.getCssValue('opacity').then(function (opacity) {
                return opacity === '1';
            }, 15000);
        });
        emailField.clear();
        driver.wait(function () {
            return submintBtn.getCssValue('opacity').then(function (opacity) {
                return opacity === '0.65';
            }, 15000);
        })

    });

    it('has all options from the navigation bar', function () {
        driver.findElement(By.css('nav')).getText().then(function (text) {
            console.log(text);
        });
    });

});