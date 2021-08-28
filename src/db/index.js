import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
    host: PGHOST,
    dialect: "postgres",
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({
            // force:true
        })
        console.log("Connection has been established Successfully");
    } catch (error) {
        console.log("Unable to connect the database", error);
    }
};

testConnection();

export default sequelize;

