import dotenv from 'dotenv'

dotenv.config();
const env = process.env;

module.exports = {
    development: {
        username: env['DB_DEVELOPMENT_USER_NAME'],
        password: env['DB_DEVELOPMENT_PASSWORD'],
        database: env['DB_DEVELOPMENT_DATA_BASE'],
        host: env['DB_DEVELOPMENT_HOST'],
        dialect: env['DB_DEVELOPMENT_DIALECT']
    },
    test: {
        username: env['DB_TEST_USER_NAME'],
        password: env['DB_TEST_PASSWORD'],
        database: env['DB_TEST_DATA_BASE'],
        host: env['DB_TEST_HOST'],
        databaseialect: env['DB_TEST_DIALECT']
    },
    production: {
        username: env['DB_PRODUCTION_USER_NAME'],
        password: env['DB_PRODUCTION_PASSWORD'],
        database: env['DB_PRODUCTION_DATA_BASE'],
        host: env['DB_PRODUCTION_HOST'],
        dialect: env['DB_PRODUCTION_DIALECT']
    }
}