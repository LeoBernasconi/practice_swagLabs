# Project: Practice - Swag Labs
It is a project to practice automation testing using the following web site: https://www.saucedemo.com/

## Prerequisites
- npm
- node

## Set up
1. Check all prerequistes.
2. Open the console and move to the folder you want to clone the project.
3. Clone the project by typing --> git clone https://github.com/LeoBernasconi/practice_swagLabs.git
4. Open a IDE (eg: Visual Studio Code) and open the cloned folder.
5. Create an env file (more information below).
6. Install Cypress
    - Open a terminal on the project root.
    - Type "npm install cypress"
    - Type "npx cypress verify" --> A message "Verified Cypress" should be shown
    - Type "npx cypress open"

## The env file
It is a text file that contains personal information. It contains the following fields:  
BASE_URL=  
USER_USERNAME=   
USER_PASSWORD=  

## Running Tests
- Run all tests (headless): cypress run
- Run test opening a browser: --browser {[chrome, firefox, edge]} --> more info at https://docs.cypress.io/guides/guides/launching-browsers
- Run specific tests: --spec {test_1, test_2, test_N}
- Run tests based on tags: --tag "{tag_1, tag_2, tag_N}" 
More info at https://docs.cypress.io/guides/guides/command-line#cypress-run

## Linting
TBD

## Other considerations
- Never work directly on main. Use branches to add work instead.
 