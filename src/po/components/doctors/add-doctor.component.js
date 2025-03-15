class AddDoctorComponent {
    get rootElement() {
        return $('.new-doctor-dialog');
    }

    get newDoctorModal() {
        return this.rootElement.$('.e-popup');
    }

    get saveButton() {
        return this.rootElement.$('.e-footer-content button.e-primary');
    }
    get closeButton() {
        return this.rootElement.$('button[title="Close"]');
    }

    /**
     * 
     * @param name {'name' | 'phone' |'email' | 'education' | 'designation'}
     * @returns 
     */

    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]',
        }
        return this.rootElement.$(selectors[name.toLowerCase()]);
    }

}

module.exports = AddDoctorComponent;