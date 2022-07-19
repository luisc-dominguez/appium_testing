const ListScreen = require('../../screenobjects/ios/todo-list.screen');

describe('TODO List', () => { 
    it('Create a list', async () => {
        
        await ListScreen.createListButton.click();
        await ListScreen.valueListName.addValue('Daily Tasks');
        await ListScreen.createButton.click();

        // assertion
        await expect(await ListScreen.listNameField('Daily Tasks')).toBeExisting();
    });    
})