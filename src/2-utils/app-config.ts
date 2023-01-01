class AppConfig {
    public port = 4000;
    public connectionString = "mongodb://127.0.0.1:27017/northwind";
}

class DevelopmentConfig extends AppConfig {
    public isDevelopment = true;
    public port = 4000;
    public connectionString = "mongodb://127.0.0.1:27017/northwind";
    public frontendUrl = "http://localhost:3000";
}

class ProductionConfig extends AppConfig {
    public isDevelopment = false;
    public port = 4000;
    public connectionString = "mongodb://127.0.0.1:27017/northwind";
    public frontendUrl = "http://localhost:3000";
}

// Must check in production: 
const appConfig = (process.env.NODE_ENV === "production") ? new ProductionConfig() : new DevelopmentConfig();

export default appConfig;