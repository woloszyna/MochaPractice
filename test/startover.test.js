var webdriver = require('selenium-webdriver'),
    { describe, it, beforeEach, before, afterEach, after } = require('selenium-webdriver/testing');
By = webdriver.By,
    until = webdriver.until;
var driver;

describe('this is some awesome testing', function () {
    this.timeout(50000);
    beforeEach(function () {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://library-app.firebaseapp.com');
    });

    afterEach(function () {
        driver.quit(); 
    });

    it('can take email address', function () {
        var submintBtn = driver.findElement(By.css('.btn-primary'));
        var emailField = driver.findElement(By.css('.ember-text-field'));

        emailField.sendKeys('tester1@test.com');
        submintBtn.click();        
    });

    it('can clear the email field', function () {
        var emailField = driver.findElement(By.css('.ember-text-field'));

        emailField.sendKeys('thisiswrong@email.com');
        emailField.clear();
    });

})