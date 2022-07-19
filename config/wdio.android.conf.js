const { config } = require('./wdio.shared.conf');
const path = require('path');

config.port = 4723;

config.specs = [
    './test/specs/android/*.spec.js',
]

config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Pixel 5",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "./app/android/ColorNotepad.apk"),
        "appium:autoGrantPermissions": true,
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