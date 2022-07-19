describe('Android Elements Test', () => {
    it('Find element by Accesibility ID', async () => {
        // find element by accesibility ID
        const appOption = await $('~App');

        // click element
        await appOption.click();

        // assert label exists
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });
    
    it('Find element by Class Name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');
        await className.getText();

        // assert label exists
        await expect(className).toHaveText('API Demos');
    });

    it('Find elements by Xpath', async () => {
        // find element by Xpath
        // xpath -- (//tagname[@attribute='value'])
        const xpath = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        await xpath.click();

        //find element by resource ID
        const resourceId = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
        await resourceId.click();

        // find element by text
        const text = await $('//android.widget.TextView[@text="Command two"]');
        await text.click();
        
        // assertion find by Class
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
    });

    it('Find elements by UIAutomator', async () => {
        // find by text contains
        const textContains = await $('android=new UiSelector().textContains("Alert")');
        await textContains.click();

        await expect(textContains).toBeClickable();
    });

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos',"Access'ibility",
            'Accessibility','Animation',
            'App','Content',
            'Graphics','Media',
            'NFC','OS',
            'Preference','Text',
            'Views'
        ];
        const actualList = [];
        
        // find multiple elements
        const textList = await $$('android.widget.TextView');

        // loop through elements
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        // assert list
        await expect(actualList).toEqual(expectedList);
    });
});