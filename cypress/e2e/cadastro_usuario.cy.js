/// <reference types="cypress"/>
import {faker} from '@faker-js/faker';

import commum_page from "../support/pages/commum_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page";
describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsaurio();
    })

    it('Campo Nome Vazio', () => {
        cadastro_usuario_page.clicarCadastrar();
        cadastro_usuario_page.validarMensagemError('O campo nome deve ser prenchido');
        cadastro_usuario_page.validarMensagemErrorShould('O campo nome deve ser prenchido');
    })  

    it('Campo E-email Vazio', () => {
        cadastro_usuario_page.preecheNome(faker.person.fullName());
        cadastro_usuario_page.clicarCadastrar();
        cadastro_usuario_page.validarMensagemErrorShould('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo E-mail inválido', () => {
        cadastro_usuario_page.preecheNome(faker.person.fullName());
        cadastro_usuario_page.preecheEmail(faker.internet.password())
        cadastro_usuario_page.clicarCadastrar();
        cadastro_usuario_page.validarMensagemErrorShould('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo Senha Vazio', () => {
        cadastro_usuario_page.preecheNome(faker.person.fullName());
        cadastro_usuario_page.preecheEmail(faker.internet.email());
        cadastro_usuario_page.clicarCadastrar();
        cadastro_usuario_page.validarMensagemErrorShould('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo Senha inválido', () => {
        cadastro_usuario_page.preecheNome(faker.person.fullName());
        cadastro_usuario_page.preecheEmail(faker.internet.email());
        cadastro_usuario_page.preecheSenha('12345');
        cadastro_usuario_page.clicarCadastrar();
        cadastro_usuario_page.validarMensagemErrorShould('O campo senha deve ter pelo menos 6 dígitos')
    })


    it('Cadastro com sucesso', async() => {
        const user = await faker.person.fullName();
        cadastro_usuario_page.preecheNome(user);
        cadastro_usuario_page.preecheEmail(faker.internet.email());
        cadastro_usuario_page.preecheSenha(faker.internet.password());
        cadastro_usuario_page.clicarCadastrar();
       cadastro_usuario_page.validarMensagemSucesso(user)
    })
})