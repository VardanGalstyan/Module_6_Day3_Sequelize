import { Sequelize } from "sequelize";
const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env;

const { NODE_ENV, DATABASE_URL } = process.env;
const isDeployed = NODE_ENV === 'production'
const sslConfig = isDeployed ? { ssl: { rejectUnauthorized: false } } : {}

const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    ...(sslConfig),
    connectionString: DATABASE_URL
    
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({

        })
        console.log("Connection has been established Successfully");
    } catch (error) {
        console.log("Unable to connect the database", error);
    }
};

testConnection();

export default sequelize;

