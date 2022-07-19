describe('Text Input Field Exercise', () => { 
    it('Input and validate text', async () => {
        // find and click Views label
        const viewsLabel = await $('~Views');
        await viewsLabel.click();

        // find and click Auto Complete label
        const autoCompleteLabel = await $('//android.widget.TextView[@text="Auto Complete"]');
        await autoCompleteLabel.click();

        // find and click 1. Screen Top label
        const screenTopLabel = await $('//android.widget.TextView[@content-desc="1. Screen Top"]');
        await screenTopLabel.click();

        // find and input text in the input field
        const inputField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await inputField.addValue('Mexico');

        // assert auto complete has input value
        await expect(inputField).toHaveText('Mexico');

    });
});