module.exports = {
    DB: process.env.HOST ? process.env.HOST : 'mongodb+srv://admin:fauziarc30699@learnit-sandbox-1he4a.mongodb.net/learnit-react?retrywrites=true&w=majority',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
};