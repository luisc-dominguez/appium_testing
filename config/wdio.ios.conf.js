const { config } = require('./wdio.shared.conf');
const path = require('path');

config.port = 4723;

config.specs = [
    './test/specs/ios/*.spec.js',
]

config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "14.5",
        "appium:deviceName": "iPhone 13 Pro",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(), "./app/ios/MVCTodo.app"),
    }
]

config.services = [
    ['appium', {
        args: {
            address: 'localhost',
            port: 4723
        },
        logPath: './'
    }]
],

exports.config = config;