import AddNoteScreen from '../../screenobjects/android/add-note.screen';

describe('Add Notes', () => {
    it('Skip Tutorial', async () => {
       await AddNoteScreen.skipButton.click();
       await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    });

    it('Add a Note, save changes, and verify note', async () => {
        await AddNoteScreen.addNoteText.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // Add note title
        await AddNoteScreen.noteHeader.addValue('Movie List');

        // Add note content
        await AddNoteScreen.noteContent.addValue('Interestellar\nKunfu Panda\nNeed for Speed');

        // Save note
        await AddNoteScreen.saveChanges();

        // Verify note
        await expect(AddNoteScreen.editButton).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Interestellar\nKunfu Panda\nNeed for Speed");
    });
});