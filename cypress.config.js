module.exports = defineConfig({

  //Timeout defined for waiting for elements/actions (could be overwrite on the spec)
  defaultCommandTimeout: 6000,
  
  //Values to be taken when executing the tests
  env:{
    url: "https://www.saucedemo.com/"
  },
  
  //Record video when fails?
  video: false, 
  
  //Indicates the number of times a failed test will be executed again
  retries: {
    runMode: 1,
    openMode: 0,
    },
  
  //General e2e configuration  
  e2e: {
    //Indicates what Cypress will look for tests
    specPattern:'cypress/e2e/*/*.js'
  },
});
