describe('iOS Native Features', () => { 
    it('Working with alert box', async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        // click OK
        // await $('~OK').click();

        // accept/dismiss alert
        await driver.dismissAlert();

        // assertion
        await expect(await $('~OK')).not.toExist();
    });
    
    it('Working with Scrollable Elements', async () => {
        // easy
        await driver.execute('mobile: scroll', {direction: 'down'});
        await driver.execute('mobile: scroll', {direction: 'up'});
       
        // complex
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');

        await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: 'down'});
        await driver.execute('mobile: scroll', {element: bluePicker.elementId, direction: 'up'});
        await driver.pause(1000);
    });

    it.only('Working with Picker View', async () => {
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');

        // set purple color (125, 0, 125)
        await redPicker.addValue('125');
        await bluePicker.addValue('0');
        await greenPicker.addValue('125');

        await driver.pause(3000);
    });
})