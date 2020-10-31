var webdriver = require('selenium-webdriver'),
    //{ describe, it, before, beforeEach, after, afterEach } = require('selenium-webdriver/testing');
driver = require('chromedriver');
    By = webdriver.By,
        until = webdriver.until;

describe('some scenarios', function () {
    beforeEach(function () {
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://library-app.firebaseapp.com');
    });

    afterEach(function () {
        driver.quit();
    });

    it('can do somehting', function () {
        var submitBtn = driver.findElement(By.css('.btn-primary'));
        driver.findElement(By.css('input.ember-text-field')).sendKeys('test@test.com');

        driver.wait(function () {
            return submitBtn.getCssValue('opacity').then(function (result) {
                return result === '1';
            });
        }, 15000);
    });

    it('can do something else', function () {
        
    });

    it('can also do this', function () {
        
    });

    })
    
        
