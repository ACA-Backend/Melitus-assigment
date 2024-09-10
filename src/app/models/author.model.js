import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config";







const Aurthur = sequelize.define("Arthur", 
    {
        name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        },
        dateOfBirth: {
            type: DataTypes.STRING,
            unique:false,
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        },

    }
)