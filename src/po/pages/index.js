const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");

//Page factory where pages are created by a call
// function that returns an instanciate of the class when the parameter is passed
/**
 * 
 * @param name {'dashboard' | 'doctors'}  
 * @returns {DashboardPage | DoctorsPage}
 */

function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage()
    }
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    DoctorsPage,
    pages
}