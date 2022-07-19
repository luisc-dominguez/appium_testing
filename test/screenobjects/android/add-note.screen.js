class AddNoteScreen {
    get skipButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteText() {
        return ($('//*[@text="Add note"]'));
    }

    get textOption() {
        return ($('//*[@text="Text"]'));
    }

    get textEditing() {
        return ($('//*[@text="Editing"]'));
    }

    get noteHeader() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteContent() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveChanges() {
        await driver.back();
        await driver.back();
    }
}

export default new AddNoteScreen();