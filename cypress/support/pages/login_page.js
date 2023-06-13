/// <reference types= "cypress" />

export default{
    cliclarLogin(){
        cy.get('#btnLogin')
            .click();
    },

    validarMensagemError(msg){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', msg )
    },

    preencheEmail(name){
        cy.get('#user')
            .type(name)
    },

    preencheSenha(senha){
        cy.get('#password')
            .type(senha)
    },

    validaMensagemSucesso(email){
        cy.get('#swal2-title')
        .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    },

    preencheCheckBox(){
        cy.get('#materialUnchecked')
            .check();
    }
    
}