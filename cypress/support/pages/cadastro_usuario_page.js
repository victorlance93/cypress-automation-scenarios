/// <reference types= "cypress" />

export default{
    clicarCadastrar(){
        cy.get('#btnRegister')
            .click();
    },

    validarMensagemError(msg){
        cy.get('.errorLabel')
            .then((element) =>{
                expect(element).to.be.visible 
                expect(element.text()).eq(msg)
            })  
    },

    validarMensagemErrorShould(msg){
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', msg)
    },

    preecheNome(nome){
        cy.get('#user')
            .type(nome)
    },

    preecheEmail(email){
        cy.get('#email')
            .type(email)
    },

    preecheSenha(password){
        cy.get('#password')
            .type(password)
    },

    validarMensagemSucesso(user){
        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')
        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text',`Bem-vindo ${user}` )
    }
}
