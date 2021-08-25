import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established Successfully");
    } catch (error) {
        console.log("Unable to connect the database", error);
    }
};

testConnection();

export default sequelize;
