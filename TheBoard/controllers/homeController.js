(function (homeController) {
    var data = require("../data");

    homeController.init = function (app) {

        app.get("/",
            function (req, res) {
                //res.send("<html><body><h1>" + req.url + "</html></body></h1>");
                //res.render("jade/index", { title: "Express + Jade" });
                //res.render("ejs/index", { title: "Express + Ejs" });

                data.getNoteCategories(function(err, results) {
                    res.render("index", { title: "Express + Vash", error: err, categories: results });
                });
            });

    };
})(module.exports); //passing in module.exports objects and renaming it to homeController