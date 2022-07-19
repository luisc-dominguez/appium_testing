describe('TODO List', () => { 
    it('Create a list', async () => {
        await $('///*[@name="Create list"]').click();
        await $('//*[@value="List name"]').addValue('Daily Tasks');

        await $('~Create').click();

        // assertion
        await expect(await $('~Daily Tasks').toBeExisting());
    });    
})