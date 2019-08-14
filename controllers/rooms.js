module.exports = function (app) {
    var Rooms = app.models.Rooms;

    app.get('/api/rooms', function (req, res) {
        Rooms.findOne({}, function (err, data) {
            res.send(data);
        });
    });

    app.post('/api/rooms', function (req, res) {

        Rooms.findOne({}, function (err, data) {
            if (data) {
                data.selections = req.body.selections;
                data.save(function (err, data) {
                    res.send(data);
                })
            } else {
                var rooms = new Rooms(req.body);
                rooms.save(function (err, data) {
                    res.send(data);
                })
            }
        })

    });

};