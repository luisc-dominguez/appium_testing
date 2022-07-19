describe('Scrolling Exercise', () => { 
    it('Working with a date picker', async () => {
        // access date picker
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");

        // get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        // click on change date button
        await $('~change the date').click();

        // scroll right to nex month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        // select the 10th date
        await $('//*[@text="10"]').click();

        // click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // verify the date has changed
        await expect(await date.getText()).not.toBe(currentDate);
    });
});


