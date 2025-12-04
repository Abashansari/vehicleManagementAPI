import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Vehicle = sequelize.define("Vehicle", {
    vehicleNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DriverName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
sequelize.sync()
export default Vehicle