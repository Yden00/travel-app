import { countries } from '../client/src/countries'

module.exports = {
  async up(db) {
    return db.collection('countries').insertMany(countries)
  },

  async down(db) {
    return db.collection('countries');
  }
};
