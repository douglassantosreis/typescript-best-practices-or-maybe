module.exports = {
    env: 'test',
    db: 'ts-api-tes',
    dialect: 'postgres',
    username: 'postgres',
    password: 'pgroot',
    host: 'localhost',
    serverPort: '3000',
    pgPort: 5432,
    //dbUrl: 'postgres://postgres.pgroot@localhost:5432/ts-api',
    dbUrl: '${dialect}://${username}.${password}@${host}:${pgPort}/${db}',
    secret: 'S3cr3t'
}