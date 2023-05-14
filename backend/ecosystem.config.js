module.exports = {
    apps: [
        {
            name: "account_service",
            script: "./account_service",
            env: {
                PORT: 3001,
                BASE_URL: "localhost",
                DB_URL: "mongodb://127.0.0.1:27017/account-service",
                ADMIN_PASSWORD: "123456",
                ACCESS_TOKEN_SECRET_KEY: "kQp0VQ2CUC",
                REFRESH_TOKEN_SECRET_KEY: "rDqyBRoUhA",
                CLIENT_SERVICE: "http://localhost:3002/api/user-service/v1",
            },
        },
        {
            name: "client_service",
            script: "./client_service",
            env: {
                PORT: 3002,
                HOST: "localhost",
                DB_USER: "root",
                DB_PASSWORD: "root",
                DB_NAME: "db_user_infor",
                ACCESS_TOKEN_SECRET_KEY: "kQp0VQ2CUC",
                REFRESH_TOKEN_SECRET_KEY: "rDqyBRoUhA",
                ACCOUNT_SERVICE: "http://localhost:3002/api/account-service/v1",
                COURSE_SERVICE: "http://localhost:3003/api/course-service/v1",
            },
        },
        {
            name: "course_service",
            script: "./course_service",
            env: {
                PORT: 3003,
                DB_URL: "mongodb://127.0.0.1:27017/course_service",
                ClIENT_SERVICE: "http://localhost:3002/api/user-service/v1",
            },
        },
        {
            name: "gateway",
            script: "./gateway",
            env: {
                PORT: 3004,
                HOST: "localhost",
                ACCESS_TOKEN_SECRET_KEY: "kQp0VQ2CUC",
                REFRESH_TOKEN_SECRET_KEY: "rDqyBRoUhA",
                ADMIN_PASSWORD: "123456",
                ACCOUNT_SERVICE: "http://localhost:3001",
                CLIENT_SERVICE: "http://localhost:3002",
                COURSE_SERVICE: "http://localhost:3003",
            },
        },
    ],
};
