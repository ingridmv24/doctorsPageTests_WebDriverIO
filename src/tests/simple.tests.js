const { pages } = require('./../po')

describe("Doctors page", () => {  

    beforeEach(async () => { 
        //await dashboardPage.open();
        await pages('dashboard').open();
    });

    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    });

    it('Open modal window for adding a new doctor', async () => {
        //click on doctors item in the side menu 
        await pages('dashboard').sideMenu.item('doctors').click();

        //click on add new doctor button
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

        //check that a modal window is displayed
        await expect(pages('doctors').addDoctorModal.newDoctorModal).toBeDisplayed();
    });

    it('Add a new doctor', async () => {
        //click on doctors item in the side menu
        await pages('dashboard').sideMenu.item('doctors').click();

        //click on add new doctor button
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

        //wait for visibility of modal window 
        await pages('doctors').addDoctorModal.newDoctorModal.waitForDisplayed();

        //fill doctor's data
        await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').addDoctorModal.input('phone').setValue('1111111111');
        await pages('doctors').addDoctorModal.input('email').setValue('test@test.com');
        await pages('doctors').addDoctorModal.input('education').setValue('Basic');
        await pages('doctors').addDoctorModal.input('designation').setValue('Test');

        //click on save button
        await pages('doctors').addDoctorModal.saveButton.click();

        //verify the modal is not displayed
        await expect(pages('doctors').addDoctorModal.newDoctorModal).not.toBeDisplayed();

        //verify new doctor is added
        await expect(pages('doctors').specialistCard('8').name).toHaveText('Dr. John Doe');
        await expect(pages('doctors').specialistCard('8').education).toHaveText('Basic', { ignoreCase: true });
    });

    it('Close a modal window before adding a new doctor', async () => {
        //click on doctors item in the side menu
        await pages('dashboard').sideMenu.item('doctors').click();

        //click on add new doctor button
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

        //wait for visibility of modal window 
        await pages('doctors').addDoctorModal.newDoctorModal.waitForDisplayed();

        //close the modal window
        await pages('doctors').addDoctorModal.closeButton.click();

        //verify the modal is not displayed
        await expect(pages('doctors').addDoctorModal.newDoctorModal).not.toBeDisplayed()
    });
})