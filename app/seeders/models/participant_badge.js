'use strict';
module.exports = (sequelize, DataTypes) => {
  var Participant_Badge = sequelize.define('Participant_Badge', {
    message: DataTypes.STRING,
    id_participant: DataTypes.INTEGER,
    id_badge: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Participant_Badge;
};