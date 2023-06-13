/// <reference types="cypress"/>

import commum_page from "../support/pages/commum_page";
import login_page from "../support/pages/login_page";
import {faker} from '@faker-js/faker';

describe('Login', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarLogin();

    })

    it('Campo E-mail Vazio', () => {
        login_page.cliclarLogin();
        login_page.validarMensagemError('E-mail inválido.');
    })

    it('Campo E-mail inválido', () => {
        login_page.preencheEmail(faker.person.fullName())
        login_page.cliclarLogin();
        login_page.validarMensagemError('E-mail inválido.');
    })

    it('Campo Senha Vazio', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.cliclarLogin();
        login_page.validarMensagemError('Senha inválida.');
    })

    it('Campo Senha inválido', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.preencheSenha('12345')
        login_page.cliclarLogin();
        login_page.validarMensagemError('Senha inválida.');
    })


    it.only('Login com sucesso', async() => {
        const email = await faker.internet.email();

        login_page.preencheEmail(email)
        login_page.preencheSenha('123456')
        login_page.preencheCheckBox();
        login_page.cliclarLogin();
        login_page.validaMensagemSucesso(email)
    })
})