import sequelize from "../index.js"
import s from "sequelize";
const { DataTypes } = s;

const userProduct = sequelize.define("userProduct", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default userProduct;
