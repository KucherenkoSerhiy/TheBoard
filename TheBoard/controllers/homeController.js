(function (homeController) {
    var data = require("../data");

    homeController.init = function (app) {

        app.get("/",
            function (req, res) {
                //res.send("<html><body><h1>" + req.url + "</html></body></h1>");
                //res.render("jade/index", { title: "Express + Jade" });
                //res.render("ejs/index", { title: "Express + Ejs" });

                data.getNoteCategories(function (err, results) {
                    res.render("index",
                        {
                            title: "The Board",
                            error: err,
                            categories: results,
                            newCatError: req.flash("newCatName")
                        });
                });
            });

        app.post("/createCategory", function (req, res) {
            var categoryName = req.body.categoryName;
            data.createNewCategory(categoryName,
                function (err) {
                    if (err) {
                        console.log(err);
                        req.flash("newCatName", err);
                        res.redirect("/");
                    } else {
                        res.redirect("/nodes/" + categoryName);
                    }
                });
        });
    };
})(module.exports); //passing in module.exports objects and renaming it to homeController