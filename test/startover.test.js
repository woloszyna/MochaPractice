var webdriver = require('selenium-webdriver'),
    { describe, it, beforeEach, before, afterEach, after } = require('selenium-webdriver/testing');
var By = webdriver.By;
var assert = require('assert');
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
        return submintBtn.getCssValue('opacity').then(function (opacity) {
                assert.strictEqual(opacity, '1');
        });
        submintBtn.click();
    });

    it('can show an alert when email provided and submitted', function () {
        var submintBtn = driver.findElement(By.css('.btn-primary'));
        var emailField = driver.findElement(By.css('.ember-text-field'));

        emailField.sendKeys('tester@test.com');
        submintBtn.click();

        driver.wait(until.elementLocated(By.css('.alert')), 5000);
        driver.findElements(By.css('.alert')).then(function (result) {
            assert.strictEqual(result.length, 1);
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
        return submintBtn.getCssValue('opacity').then(function (opacity) {
            assert.strictEqual(opacity, '0.65');
        });

    });

    it('has all options from the navigation bar', function () {
        driver.findElements(By.css('nav')).then(function (text) {
            assert.strictEqual(text.length, 1);
        });
    });

});