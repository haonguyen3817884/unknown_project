class Customer {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    static firstNameKey() {
        return "firstName";
    }

    static lastNameKey() {
        return "lastName";
    }

    static emailKey() {
        return "email";
    }

    static fromJson(jsonData) {
        let firstName = jsonData[this.firstNameKey()];
        let lastName = jsonData[this.lastNameKey()];
        let email = jsonData[this.emailKey()];

        return new Customer(firstName, lastName, email);
    }

    static toJson(customer) {
        return {
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email
        };
    }
}

export default Customer;