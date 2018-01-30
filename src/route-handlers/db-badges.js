const Sequelize = require('sequelize');
const db = require('../../app/seeders/db.js');

// Create Badges
const createBadges = (info) => {
  db.Participant_Badge.create({
    id_badge: info.badgeId,
    id_participant: info.participantId,
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err);
    });
};

const allBadges = () => {
  return db.Badge.findAll({
    where: {
      icon: 'null'
    }
  })
    .then(results => {
      console.log(results, 'results from db.badge.findAll');
      return results;
    })
    .catch(err => console.error(err));
};

const findBadges = (id) => {
  db.Participant_Badge.findAll({
    where: {
      id_participant: id,
    },
  })
    .then(results => {
      console.log(results);
      return result;
    })
    .catch(err => console.error(err));
};

module.exports.createBadges = createBadges;
module.exports.allBadges = allBadges;
module.exports.findBadges = findBadges;
