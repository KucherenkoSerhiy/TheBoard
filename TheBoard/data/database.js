(function (database) {
    var MongoClient = require('mongodb').MongoClient;
    var mongoUrl = 'mongodb://localhost:27017/';
    var theDb = null;

    database.getDb = function(next) {
        if (!theDb) {
            // connect to the database
            MongoClient.connect(mongoUrl, function (err, client) {
                if (err) throw err;

                var dbo = client.db('theBoard');
                theDb = {
                    db: dbo,
                    notes: dbo.collection("notes")
                };
                next(null, theDb);
            });
        } else {
            next(null, theDb);
        }
    }
})(module.exports);

