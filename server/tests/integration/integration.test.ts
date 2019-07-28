import { app, request, expect } from './config/helpers';

const HTTP_STATUS_OK:number = 200;

describe('Teste de integracão', () => {

    describe('GET/ /api/users/all', () => {
        it('Deve retornar um JSON com todos os usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(HTTP_STATUS_OK);
                    done(error);
                });
        });
    });

    describe('GET/ /api/users/:id', () => {
        it('Deve retornar um JSON com apenas um usuário', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTP_STATUS_OK);
                    done(error);
                });
        });
    });

    describe('POST /api/users/create', () => {
        it('Deve criar um novo usuário', done => {
            const user = {
                nome: 'Teste'
            }
            request(app)
                .post('/api/users/create')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTP_STATUS_OK);;
                    done(error);
                });
        });
    });

    describe('PUT /api/users/:id/update', () => {
        it('Deve atualizar um usuário', done => {
            const user = {
                nome: 'Teste'
            }
            request(app)
                .put(`/api/users/${1}/update`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTP_STATUS_OK);
                    done(error);
                });
        });
    });

    describe('DELETE /api/users/:id/destroy', () => {
        it('Deve deletar um usuário', done => {
            request(app)
                .delete(`/api/users/${1}/destroy`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTP_STATUS_OK);;
                    done(error);
                });
        });
    });
});