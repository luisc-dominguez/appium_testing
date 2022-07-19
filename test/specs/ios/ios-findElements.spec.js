describe('iOS Find Elements', () => {
    it('find elements by Accesibility ID', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();

        // assertion
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });
    
    it('find elements by tag name', async () => {
        // single element
        await $('XCUIElementTypeStaticText').getText();

        // multiple elements
        const textElements = await $$('XCUIElementTypeStaticText');

        for (const element of textElements) {
            await element.getText();
        }
    });  

    it('find elements by Xpath', async () => {
        await $('//*[@name="Alert Views"]').click();
        await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    }); 

    it('find elements by Class Chains', async () => {
        const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find elements by Predicate Strings', async () => {
        //const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });
})