const express = require("express");
const App = express();
App.use(express.static("./public"));

App.set("view engine", "ejs");
App.set("views", "./server");

App.get("/", function(req, res) {
    res.render("main")
});

App.get("/page/one", function(req, res) {
    res.render("page", {
        name: "ОДИН"
    });
});

App.get("/page/two", function(req, res) {
    res.render("page",{
        name: "ТОРЧ"
    });
});

App.listen(8888);