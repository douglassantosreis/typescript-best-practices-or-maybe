import { testDouble, expect } from './config/helpers';
import User from '../../modules/User/service';

describe('Teste unitários do Controller', () => {

    describe('Metodo Create', () => {
        it('Deve cria um novo usuário', () => {
            const novoUsuario = {
                id: 9999,
                name: 'Novo Usuário',
                email: 'novo@usuario.com.br',
                password: '1234'
            };

            const user = new User();

            return user.create(novoUsuario)
                    .then(data => {
                        expect(data.dataValues).to.have.all.keys(
                            ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                        )
                    });
        });
    });

    describe('Metodo Update', () => {
        it('Deve atualizar um novo usuário', () => {
            
            const usuarioUpdate = {
                name: 'Usuário Atualizado',
                email: 'usuario@atualizado.com.br'
            }
            const user = new User();
            return user.update(9999, usuarioUpdate)
                .then(data => {
                    expect(data[0]).to.be.equal(1);
                })
        });
    });

    describe('Metodo GET Users', () => {
        it('Deve retornar uma lista com todos os usuários', () => {

            const user = new User();

            return user.getAll()
                .then(data => {
                    expect(data).to.be.an('array');
                    expect(data[0]).to.have.all.keys(
                        ['email', 'id', 'name', 'password']
                    );
                });
        });
    });

    describe('Metodo DELETE Users', () => {
        it('Deve deletar um usuário', () => {
            const user = new User();
            return user.delete(1)
                .then(data => {
                    expect(data).to.be.equal(1);
            });
        });
    });

    describe('Metodo mostra usuário especifico', () => {
        it('Deve mostrar o usuário pelo ID', () => {
            const user = new User();
            return user.getById(9999)
                .then(data => {
                    expect(data).to.have.all.keys(
                        ['email', 'id', 'name', 'password']
                    );
            });
        });
    });

    describe('Metodo mostra usuário especifico', () => {
        it('Deve mostrar o usuário pelo EMAIL', () => {
            const user = new User();
            return user.getByEmail('usuario@atualizado.com.br')
                .then(data => {
                    expect(data).to.have.all.keys(
                        ['email', 'id', 'name', 'password']
                    );
            });
        });
    });
});