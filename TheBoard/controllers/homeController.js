(function(homeController) {
    homeController.init = function (app) {

        app.get("/",
            function (req, res) {
                //res.send("<html><body><h1>" + req.url + "</html></body></h1>");
                //res.render("jade/index", { title: "Express + Jade" });
                //res.render("ejs/index", { title: "Express + Ejs" });
                res.render("index", { title: "Express + Vash" });
            });

    };
})(module.exports); //passing in module.exports objects and renaming it to homeController