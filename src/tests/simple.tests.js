const DashboardPage = require("./../po/pages/dashboard.page");
const DoctorsPage = require("./../po/pages/doctors.page");
const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();


describe("Doctors page", () => {  

    beforeEach(async () => { 
        await dashboardPage.open();
    });

    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    });

    it('Open modal window for adding a new doctor', async () => {
        //click on doctors item in the side menu 
        await dashboardPage.sideMenu.item('doctors').click();

        //click on add new doctor button
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();

        //check that a modal window is displayed
        await expect(doctorsPage.addDoctorModal.newDoctorModal).toBeDisplayed();
    });

    it('Add a new doctor', async () => {
        //click on doctors item in the side menu
        await dashboardPage.sideMenu.item('doctors').click();

        //click on add new doctor button
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();

        //wait for visibility of modal window 
        await doctorsPage.addDoctorModal.newDoctorModal.waitForDisplayed();

        //fill doctor's data
        const doctorNameInput = await $('[name="Name"]');
        doctorNameInput.setValue('John Doe');

        const mobileNumberInput = await $('#DoctorMobile');
        mobileNumberInput.setValue('1111111111');

        const emailInput = await $('[name="Email"]');
        emailInput.setValue('test@test.com');

        const educationInput = await $('[name="Education"]');
        educationInput.setValue('Basic');

        const designationInput = await $('[name="Designation"]');
        designationInput.setValue('Test');

        //click on save button
        const saveNewDoctorButton = await $('.e-footer-content button.e-primary');
        saveNewDoctorButton.click();

        //verify the modal is not displayed
        await expect(doctorsPage.addDoctorModal.newDoctorModal).not.toBeDisplayed()

        //verify new doctor is added
        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('Basic', { ignoreCase: true });
    });

    it('Close a modal window before adding a new doctor', async () => {
        //click on doctors item in the side menu
        await dashboardPage.sideMenu.item('doctors').click();

        //click on add new doctor button
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();

        //wait for visibility of modal window 
        await doctorsPage.addDoctorModal.newDoctorModal.waitForDisplayed();

        //close the modal window
        const closeModalButtton = await $("button[title='Close']");
        closeModalButtton.click();

        //verify the modal is not displayed
        await expect(doctorsPage.addDoctorModal.newDoctorModal).not.toBeDisplayed()
    });
})