// load the things we need
var mongoose = require('mongoose');


var constantsSchema = new mongoose.Schema({
    adults: [],
    children: []
});

// create the model for users and expose it to our app
exports.ConstantsSchema = module.exports.ConstantsSchema = constantsSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('Constants', constantsSchema);
    return app.models.Constants = mongoose.model('Constants');
};