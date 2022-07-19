describe('TODO Items', () => { 
    it('Add items to list', async () => {
        // Create list
        await $('///*[@name="Create list"]').click();
        await $('//*[@value="List name"]').addValue('Daily Tasks');
        await $('~Create').click();
        await expect(await $('~Daily Tasks').toBeExisting());
        
        // Add items to list
        await $('~Daily Tasks').click();
        await $('//*[@name="Create item"]').click();
        await $('//*[@value="Title"]').addValue('Buy milk');
        await $('//*[@value="Due"]').click();
        await $('~Date Picker').click();
        await $('~Wednesday, July 20').click();
        await $('//XCUIElementTypeWindow[@index=2]').click();
        await $('~Create').click();

        // assertion
        await expect(await $('~Buy milk').toBeExisting());
        await expect(await $('~Due July 20, 2022').toBeExisting());
    });    
})