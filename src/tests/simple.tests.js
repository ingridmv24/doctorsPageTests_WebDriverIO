describe("Doctors page", () => {  

    beforeEach(async () => { 
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        await browser.maximizeWindow();
    });

    it('Check page title', async () => {
        const title = await browser.getTitle();
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    });

    it('Open modal window for adding a new doctor', async () => {
        const doctorItem = await $('#plannerSiderBar [routerlink="/doctors"]');
        await doctorItem.click();

        //click on add new doctor button
        const addNewDoctorButton = await $('.specialization-types button.e-control');
        addNewDoctorButton.click();

        //check that a modal window is displayed
        const newDoctorModal = await $('.new-doctor-dialog.e-popup');
        await expect(newDoctorModal).toBeDisplayed();
    });

    it('Add a new doctor', async () => {
        //click on doctors item in the side menu
        const doctorItem = await $("[routerlink='/doctors']");
        await doctorItem.click();

        //click on add new doctor button
        const addNewDoctorButton = await $('.specialization-types button.e-control');
        addNewDoctorButton.click();

        //wait for visibility of modal window 
        await $('.new-doctor-dialog.e-popup').waitForDisplayed();

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
        await expect($('.new-doctor-dialog.e-popup')).not.toBeDisplayed()

        //verify new doctor is added
        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('Basic', { ignoreCase: true });
    });

    it('Close a modal window before adding a new doctor', async () => {
        //click on doctors item in the side menu
        const doctorItem = await $("[routerlink='/doctors']");
        await doctorItem.click();

        //click on add new doctor button
        const addNewDoctorButton = await $('.specialization-types button.e-control');
        addNewDoctorButton.click();

        //wait for visibility of modal window 
        const newDoctorModal = await $('.new-doctor-dialog.e-popup');
        $(newDoctorModal).waitForDisplayed();

        //close the modal window
        const closeModalButtton = await $("button[title='Close']");
        closeModalButtton.click();

        //verify the modal is not displayed
        await expect(newDoctorModal).not.toBeDisplayed()
    });
})