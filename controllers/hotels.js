module.exports = function (app) {
    var Hotels = app.models.Hotels;

    app.get('/api/hotels', function (req, res) {
        Hotels.findOne({}, function (err, data) {
            res.send(data);
        });
    });

};