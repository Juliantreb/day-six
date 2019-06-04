const express = require("express");
const path =require ("path");
//const logger = require("./src/utilities/middleware/logger");

//Init express:
const app =express();

//Middleware:
//app.use(logger);

//Body Parser Middlware:
//var properties = new Array();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api/users", require("./src/api/users-routes"));
// app.use("/api/auth", require("./src/api/auth-routes"));


const usersRouter = require("./user/index");
app.use("/api/users", usersRouter);

app.get("/api/users", (req, res) => {
    console.log(req.headers);
    res.send("<p>Hello</p>");
});

// app.get("/properties", (req, res) => {
//     // var properties = new Array();
//     // properties.push({
//     //     id: 1,
//     //     name: "One",
//     //     location: "Lisbon",
//     // });
//     res.json(properties);
// });

// app.post("/properties", (req, res) => {
//     const property = req.body;
//     properties.push(property);
//     // res.send();
//     res.json(property);
// });

app.listen(3000, (err) =>{
    if(err) {
           console.log("Oops, error");
        return;
    }
    console.log("Server listening port 3000");
});
console.log("This app runs! Yay");