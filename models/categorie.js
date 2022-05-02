"use strict";
const { user } = require("pg/lib/defaults");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      categorie.hasMany(models.product, {
        foreignKey: "categoryId",
      });

      // categorie.hasMany(models.product, {
      //   foreignKey: "categoryId",
      //   as: "participant",
      // });

      // user.findByPk(1, {
      //   include: [
      //     { model: Event, as: "owner" },
      //     { model: Event, as: "participant" },
      //   ],
      // });
    }
  }
  categorie.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "categorie",
    }
  );
  return categorie;
};
