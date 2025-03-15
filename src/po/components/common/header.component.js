const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent{
    constructor(){
        super('.planner-header')
    }

    get logoutButton(){

        return this.rootElement$('.logout-icon-container');
    }
}

module.exports = HeaderComponent;