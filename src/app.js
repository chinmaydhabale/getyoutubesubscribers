const express = require('express');
const app = express()
const path = require("path")
const subscriber = require('./models/subscribers'); //subscriber model

// GET request, Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// GET request, to get subscribers list 
app.get("/subscribers", async (req, res) => {
    try {
        // get all the subscribers from the database and exclude the __v field
        const subs = await subscriber.find().select("-__v");
        //return response with list of subscribers with status 200
        res.status(200).json(subs);
    } catch (err) {
        // if error occurs, it returns status 400 with error message
        res.status(400).json({
            error: "error while geting a list of subscribers"
        });
    }
});


// GET request, to get array of subscriber(object with only two fields names and subscribedchannel)"
app.get("/subscribers/names", async (req, res) => {

    // To retrieve a list of subscribers    
    try {
        const subs = await subscriber.find().select("-__v -_id -subscribedDate")

        // returns response with list of subscribers with status 200
        res.status(200).json(subs);
    } catch (err) {

        // if error occurs, returns status 400 with error message
        res.status(400).json({
            error: "error while getting the array of object names and subcribedchannel"
        });
    }
});

//GET request to fetch data as per id
app.get("/subscribers/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let subs = await subscriber.findById(id).select("-__v");
        // return object of subscriber
        res.status(200).json(subs);
    } catch (err) {
        // if error occurs, returns status 400 with error message
        res.status(400).json({ message: "Invalid Id" });
    }
})



















module.exports = app;

















module.exports = app;
