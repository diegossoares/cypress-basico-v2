
/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('src/index.html')
  })

    it('verifica o título da aplicação', function() {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })
    
    it('preenche os campos obrigatórios e envia o formulário', function() {
      const longText = 'Teste, teste,Teste, teste,Teste, teste,Teste, teste,Teste, teste,Teste, teste,Teste, teste,Teste, teste,Teste, teste,Teste, teste,Teste, teste,Teste, teste,'
      cy.get('input[id="firstName"]').type('Diego').should('have.value', 'Diego')
      cy.get('input[id="lastName"]').type('Soares').should('have.value', 'Soares')
      cy.get('input[id="email"]').type('teste@teste.com').should('have.value', 'teste@teste.com')
      cy.get('textarea[id="open-text-area"]').type(longText, { delay: 0})
      .should('have.value', longText)
      cy.get('button[class="button"]').click()
      cy.get('.success').should('be.visible')
      })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
      
      
      cy.get('input[id="firstName"]').type('Diego').should('have.value', 'Diego')
      cy.get('input[id="lastName"]').type('Soares').should('have.value', 'Soares')
      cy.get('input[id="email"]').type('teste@teste,com')
      cy.get('textarea[id="open-text-area"]').type('teste')
      .should('have.value', 'teste')
      cy.get('button[class="button"]').click()
      cy.get('.error').should('be.visible')
      

    })

    it('campo telefone continua vazio quando preenchido com valor não-numérico', function(){
      cy.get('input[type="number"]').type('abc')
      cy.get('input[type="number"]').should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
    cy.get('input[type="number"]').type('abc')
    cy.get('input[type="number"]').should('have.value', '')
})

    
    
  })