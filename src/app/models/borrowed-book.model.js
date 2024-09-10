import { sequelize } from "../../config/db.config";
import { DataTypes } from "sequelize";



const borrowedBook = sequelize.define("Books",
    {
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        borrower: {
            type: DataTypes,
            unique: true,
            allowNull: false
        },
        libNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        },
        isbn: {
            type: DataTypes.STRING,
            unique: true,

        },
        dateborrowed: {
            type: DataTypes.STRING,
            unique: false,
            allowNull:false,
        },
        returnDate: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
        }


    }
)
