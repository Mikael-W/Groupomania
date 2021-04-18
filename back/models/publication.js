'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Publication.belongsTo(models.User, {foreignKey:'userId'})
      models.Publication.hasMany(models.Comment)
      models.Publication.hasMany(models.Likes)
    }
  };
  Publication.init({
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    userUrl:DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publication',
  });
  return Publication;
};