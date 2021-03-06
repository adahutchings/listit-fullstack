'use strict';
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define('List', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  List.associate = function(models) {
    
   /* List.hasMany(models.Item, {
      foreignKey: "listId",
      as: "items"
    }); */
  }; 
  return List;
};