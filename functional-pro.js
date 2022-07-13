const Window = function(tabs) {    // Keep a record of the array inside the object
    this.tabs = tabs
}; 

Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);    // Join two windows into onde window
    return this;
};

Window.prototype.tabOpen = function(tab) {     // Open a new tab in a pre-existing window
    this.tabs.push(tab);
    return this;
};

Window.prototype.tabClose = function(index) {          // Close a tab in a pre-existing window
    const beforeIndex = this.tabs.splice(0, index);    // Pega o início, menos a tab do index, e deixa o resto em tabs
    const afterIndex = this.tabs.splice(1);            // Pega todo o resto (menos a tab fechada, que agora é index 0)
    this.tabs = beforeIndex.concat(afterIndex);        // Junta as duas arrays 
    return this;
}

const newWindow = new Window(['Gmail', 'Youtube', 'FCC', 'new tab']);
const otherWindow = new Window(['Twitter', 'Sinonimos']);
otherWindow.tabOpen('Git Hub');
newWindow.tabClose(3);
const finalTabs = newWindow.join(otherWindow);

console.log(finalTabs);