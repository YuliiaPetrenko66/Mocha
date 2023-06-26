


describe('Parametrized test for "Using the Grid" form', ()=>{

  beforeEach(()=>{
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  });

    const formCheck = [
      {email:'YuliiaPetrenko@gmail.com', password:'Mother'},
      {email:'AnnaPetrenko@gmail.com', password:'Dauther'}, 
      {email:'DaniilPetrenko@gmail.com', password:'Son'}
    ];
  
    formCheck.forEach(({email,password}) => {
      it(`Test for text form "${email}"`, () => { 
        cy.get('#inputEmail1').type(email);
        cy.get('#inputPassword2').type(password);
      });
      
      afterEach(()=>{
        cy.get("nb-radio:nth-child(1) label:nth-child(1) span:nth-child(3)").click();
        cy.get("form.ng-untouched.ng-pristine.ng-valid div.form-group.row button[type='submit']").first().click();
    });
  });
});