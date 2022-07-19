class ListScreen {
    get createListButton() {
        return $('///*[@name="Create list"]');
    }

    get valueListName() {
        return $('//*[@value="List name"]');
    }

    get createButton() {
        return $('~Create');
    }

    listNameField(name) {
        return $(`~${name}`);
    }
}

modules.exports = new ListScreen();