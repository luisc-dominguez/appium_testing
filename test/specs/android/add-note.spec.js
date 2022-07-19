describe('Add Notes', () => {
    it('Skip Tutorial', async () => {
       await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
       await expect ($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add a Note, save changes, and verify note', async () => {
        await ($('//*[@text="Add note"]')).click();
        await ($('//*[@text="Text"]')).click();
        await expect ($('//*[@text="Editing"]')).toBeDisplayed();

        // Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue('Movie List');

        // Add note content
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Interestellar');
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Kunfu Panda');
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Need for Speed');

        // Save note
        await driver.back();
        await driver.back();

        // Verify note
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Interestellar\nKunfu Panda\nNeed for Speed");
    });
});