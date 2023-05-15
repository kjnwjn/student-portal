const ACCESS_TOKEN_SECRET_KEY = "kQp0VQ2CUC";
const REFRESH_TOKEN_SECRET_KEY = "rDqyBRoUhA";

/**
 * ACCOUNT SERVICE
 */
const ACCOUNT_SERVICE_HOST = "localhost:3001/";
// MongoDB URL
const DB_URL_ACCOUNT_SERVICE = "mongodb://127.0.0.1:27017/account-service";

// -------------------------------

/**
 * CLIENT SERVICE
 */
const CLIENT_SERVICE_HOST = "localhost:3002/";
// MySQL
const DB_CLIENT_USERNAME = "root";
const DB_CLIENT_PASSWORD = "root";
const DB_CLIENT_NAME = "db_user_infor";
// -------------------------------

/**
 * COURSE SERVICE
 */
const COURSE_SERVICE_HOST = "localhost:3003/";
// MongoDB URL
const DB_URL_COURSE_SERVICE = "mongodb://127.0.0.1:27017/course_service";
// -------------------------------
module.exports = {
    apps: [
        {
            name: "account_service",
            script: "./account_service/bin/www",
            watch: true,
            env: {
                PORT: 3001,
                BASE_URL: "localhost",
                DB_URL: DB_URL_ACCOUNT_SERVICE,
                ADMIN_PASSWORD: "123456",
                CLIENT_SERVICE: `http://${CLIENT_SERVICE_HOST}api/user-service/v1`,
            },
        },
        {
            name: "client_service",
            script: "./client_service/bin/www",
            watch: true,
            env: {
                PORT: 3002,
                HOST: "localhost",
                DB_USER: DB_CLIENT_USERNAME,
                DB_PASSWORD: DB_CLIENT_PASSWORD,
                DB_NAME: DB_CLIENT_NAME,
                ACCOUNT_SERVICE: `http://${ACCOUNT_SERVICE_HOST}api/account-service/v1`,
                COURSE_SERVICE: `http://${COURSE_SERVICE_HOST}api/course-service/v1`,
            },
        },
        {
            name: "course_service",
            script: "./course-service/dist/app.js",
            env: {
                PORT: 3003,
                DB_URL: DB_URL_COURSE_SERVICE,
                ClIENT_SERVICE: `http://${CLIENT_SERVICE_HOST}api/user-service/v1`,
            },
        },
        {
            name: "gateway",
            script: "./gateway/app.js",
            watch: true,

            env: {
                PORT: 3004,
                HOST: "localhost",
                ACCESS_TOKEN_SECRET_KEY,
                REFRESH_TOKEN_SECRET_KEY,
                ADMIN_PASSWORD: "123456",
                ACCOUNT_SERVICE: ACCOUNT_SERVICE_HOST,
                CLIENT_SERVICE: CLIENT_SERVICE_HOST,
                COURSE_SERVICE: COURSE_SERVICE_HOST,
            },
        },
    ],
};
