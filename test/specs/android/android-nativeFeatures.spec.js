describe('Android Native Features Tests', () => { 
    it('Access an Activity directly', async () => {
        // access activity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');
        await driver.pause(3000);

        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });
    
    it('Working with dialog boxes', async () => {
        // access activity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

        // click on the first dialog box
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //accept alert
        // await driver.acceptAlert();

        // dismiss alert
        // await driver.dismissAlert();

        // click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        //assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        // scroll and click on label (not stable)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrolltoEnd(1,5)');
        
        // scroll text into view (more stable)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // assertion
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        // horizontal scroll
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    });
});