export class LoginPage{

    login_button(){
        cy.get("#login-button")
    }

    password_input(){
        cy.get("#password")
    }

    username_input(){
        cy.get("#user-name")
    }

    login_to_platform(username, password){
        this.username_input.clear();
        this.username_input.type(username);
        this.username_input.should("not.be.empty");
        this.password_input.clear();
        this.password_input.type(password)
        this.password_input.should("not.be.empty")
        this.login_button.click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }


}