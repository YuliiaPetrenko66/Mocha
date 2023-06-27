let someVar3 = "Ця змінна доступна для усіх describe по всьому файлу ";
  
  describe('Positive scenarios', ()=>{

    let someVar2 = "Ця змінна доступна для усіх тестів в межах describe ";

  it('Test1', () => {
    let someVar = 123;
    cy.visit('https://google.com');
    cy.get('#L2AGLb').click();
    cy.log(someVar);
    cy.log(someVar2);
    cy.log(someVar3);
  })

  it('Test2', () => {
    cy.visit('https://google.com');
    cy.get('#L2AGLb').click();
    //cy.log(someVar) - not reachable
    cy.log(someVar2);
  })

  it('Test3', () => {
    cy.visit('https://google.com');
    cy.get('#L2AGLb').click();
    cy.log(someVar2);

    someVar3 = 'New text from Test3';
  })

 })



 describe('Negative scenarios', ()=>{

  it('Test1', () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb').click();
    //cy.log(someVar2)  - not reachable
    cy.log(someVar3) 
  })

  it('Test2', () => {////it.skip - пропускає тільки цей тест
    cy.visit('https://google.com')
    cy.get('#L2AGLb').click();
  })

  it('Test3', () => {//it.only - запускає тільки цей тест
    cy.visit('https://google.com')
    cy.get('#L2AGLb').click();
  })

 })