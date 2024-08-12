import {LoginPage} from '../page_objects/login_page';

describe("Login tests", () =>{
    let login = new LoginPage();

    //I NEED TO TEST THIS METHOD!!!
    // Returning false here prevents Cypress from failing the test
    Cypress.on('uncaught:exception', () =>
        false
    );


    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");

    })


    it("Login sucessfully", ()=>{
        valid_username = "standard_user";
        valid_password = "secret_sauce";
        login.login_to_platform(username=valid_username, password=valid_password)
        cy.get(".app_logo").should('have.value', 'Swag Labs')
    })

    it.skip("Login with empty user", ()=>{
        
    })

    it.skip("Login with empty pass", ()=>{
        
    })

    it.skip("Login with invalid user", ()=>{
        
    })

    it.skip("Login with invalid pass", ()=>{
        
    })


}
)




