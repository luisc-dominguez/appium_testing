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
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Interestellar\nNemo\nNeed for Speed');

        // Save note
        await driver.back();
        await driver.back();

        // Verify note
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Interestellar\nNemo\nNeed for Speed");
    });

    it('Delete Note and check if the note is in the trash can', async () => {
        await driver.back();
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        // click on note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        // click on more icon
        await $('~More').click();

        // click on delete item
        await $('//*[@text="Delete"]').click();

        // accept alert
        await driver.acceptAlert();

        // click on menu icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        // click on trash can
        await $('//*[@text="Trash Can"]').click();

        // verify note is in the trash can
        const trashNote = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        await expect(trashNote).toHaveText(note);
    });
});