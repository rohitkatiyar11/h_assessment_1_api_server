// load the things we need
var mongoose = require('mongoose');


var roomsSchema = new mongoose.Schema({
    selections: []
});

// create the model for users and expose it to our app
exports.RoomsSchema = module.exports.RoomsSchema = roomsSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('Rooms', roomsSchema);
    return app.models.Rooms = mongoose.model('Rooms');
};