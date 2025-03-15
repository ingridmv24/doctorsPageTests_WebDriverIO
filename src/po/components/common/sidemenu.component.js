const BaseComponent = require('./base.component');

class SideMenuComponent extends BaseComponent{
    constructor(){
        super('#plannerSiderBar');
    }

    //to get admin name from the sidebar
    get adminName() {
        return this.rootElement$('.name');
    }

    //special method to pass a parameter for each item I want to work with
    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]',
            patiens: '[routerlink="/patients"]',
            preferences: '[routerlink="/reference"]',
            about: '[routerlink="/about"]',
        };
        return this.rootElement.$(selectors[param.toLowerCase()]); 
    }
}
module.exports = SideMenuComponent;
