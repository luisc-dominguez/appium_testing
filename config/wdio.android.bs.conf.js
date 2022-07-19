const { config } = require('./wdio.shared.conf');
require('dotenv').config()

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    './test/specs/android/add-note-screen.spec.js',
]

config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "Google Pixel 3",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://c58e90a41363eebcddef5df92afaa1e6740bdf42",
        "appium:autoGrantPermissions": true,
    }
]

config.services = [
    'browserstack'
]

exports.config = config;