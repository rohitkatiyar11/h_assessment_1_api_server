module.exports = function (app) {
    var Constants = app.models.Constants;

    app.get('/api/constants', function (req, res) {
        Constants.findOne({}, function (err, data) {
            res.send(data);
        });
    });

};