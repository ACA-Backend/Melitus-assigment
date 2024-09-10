import { allow } from "joi";
import { sequelize } from "../../config.js";
import { DataTypes } from "sequelize";



const Book = sequelize.define("Book",
    {
        title: {
            type: DataTypes.STRING,
            unique: true,
        },
        publicationDate: {
            type: DataTypes.STRING,
            unique: true,
        },
        isbn:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
        },
        libNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        }

    }
)