// load the things we need
var mongoose = require('mongoose');


var hotelsSchema = new mongoose.Schema({
  name: { type: String },
  address: {
      line1: {type: String},
      line2: {type: String},
      line3: {type: String}
  },
  facilities: {
      map: {type: String},
      photos: {type: String},
      amenities: {type: String}
  }
});

// create the model for users and expose it to our app
exports.HotelsSchema = module.exports.HotelsSchema = hotelsSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('Hotels', hotelsSchema);
    return app.models.Hotels = mongoose.model('Hotels');
};