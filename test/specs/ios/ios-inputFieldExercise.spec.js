describe('iOS input field Exercise', () => {
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

    it('Exercise: Enter text in the search field', async () => {
        await $('~Search').click();
        await $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue('I love this course!');
        await expect(await $('//XCUIElementTypeSearchField')).toHaveAttr('value');

        await $('~Clear text').click();
        await expect(await $('//XCUIElementTypeSearchField')).not.toHaveAttr('value');
    });
})