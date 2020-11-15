# MochaPractice
Practice Project to learn, practice and Use MochaJS Test Automation Framework


## <b>LEARNING PLATFORM: https://library-app.firebaseapp.com</b>
## <b>EXPERIMENTING AND PRACTICE PLATFORM: http://the-internet.herokuapp.com</b>


## <b>INSTALLATION STEPS:</b>
1. mkdir <project name>
2. mkdir test //This is very important for mocha js to be able to identify tests
3. npm install mocha
4. npm. install selenium-webdriver@3.6.0
5. npm. install chromedriver
6. npm. install geckodriver
7. Verify that what's required is in fact installed
    npm -g list <EXACT NAME OF THE NODE>
    e.g. npm -g list mocha
        OR  (if installed locally)
    npm list mocha


## <b>HINTS:</b>
1. MochaJS: (https://mochajs.org)
2. Mocha's API Documentation: (https://mochajs.org/api/index.html)

## <b>WHAT I HAVE LEARNT</b>

## <b>25/10/2020:</b>
1. Installation of MochaJS (https://mochajs.org/#installation)
2. Writing simple test to familiarise with Mocha syntax;

## <b>26/10/2020:</b>
1. Continue on writing syntax to familiarise myself with syntax
2. <del>apply to practice environment.</del>
3. <b>Learn to read main framework instructions rather than following (OUTDATED) YouTube Videos</b>
    a. Create the folder called "Test" as per the official mocha website and test files within;

## <b>01/11/2020:</b>
1. Learnt to use timeouts to be able to spin up the browser:
    'Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called;'
2. Continue to creating Framework for MochaJS on MacOs
3. Installed 'code' command in path to allow open JS files from the terminal
    Launch VS Code.
    Open the Command Palette (⇧⌘P) and type ‘shell command’ to find the Shell Command: Install ‘code’ command in PATH command.

    To start editing file execute the following:
- code \path\to\the\file

4. Adding Mochawesome reporter
    npm install mochawesome
    npm list mochawesome

    www: https://github.com/adamgruber/mochawesome

5. Running Mochawesome reporter
    - mocha test --reporter node_modules/mochawesome --reporter-options autoOpen=true
            OR
    - add to the package.json file

## <b>08/11/2020:</b>
1. Assertions

    a. calling node assert | assert = require('assert),


## <b>15/11/2020:</b>

1. Page object model recap (Do NEVER USE CanquerJS on YT, full of crap!!!!);
1. Page object model recap using better resource (QAShahin);
