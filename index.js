import express from "express";
import data from "./data/mock.json" with { type: "json" };

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

//GET
app.get("/", (req, res) => {
    res.send("Instructions: " + "<br/>" + "<br/>"

        + "Public Files available to you: 1.jpg, 2.jpg, 3.gif, 4.csv" + "<br/>"
        + "How to Access & Download these Public Files: http://localhost:" + PORT + "/file_name" + "<br/>" + "<br/>"

        + "Other Files available to you: 5.css, 6.js, 7.mp3, 8.mp4" + "<br/>"
        + "How to Access & Download these Other Files: http://localhost:" + PORT + "/other/file_name" + "<br/>" + "<br/>"

        + "Data Available to you: Student Class Data" + "<br/>"
        + "How to Access this Data: http://localhost:" + PORT + "/data" + "<br/>" + "<br/>"

        + "After visiting a file, the site will automatically direct you to download the file."     
    );
});

//GET - .json data with the .json method
app.get("/data", (req, res) => {
    res.json(data)
});

//GET - accessing certain public files with Routing Parameters
app.get("/:fileName", (req, res) => {
    //Access the routing parameters
    const fileName = req.params.fileName;

    //Access & Download public file
    res.redirect("http://localhost:"+ PORT + "/" + fileName + "/download");

});

//GET - download public files with Routing Parameters
app.get("/:fileName/download", (req, res) => {
    //Access the routing parameters
    const fileName = req.params.fileName;

    //Download public files
    res.download("public/" + fileName);
});

//GET - accessing certain other files with Routing Parameters
app.get("/other/:fileName", (req, res) => {
    //Access the routing parameters
    const fileName = req.params.fileName;

    //Access & Download public file
    res.redirect("http://localhost:"+ PORT + "/other/" + fileName + "/download");

});

//GET - download other files with Routing Parameters
app.get("/other/:fileName/download", (req, res) => {
    //Access the routing parameters
    const fileName = req.params.fileName;

    //Download other files
    res.download("other/" + fileName);
});

//Error Handler
app.use((err, req, res, next) => {
    res.status(500).send("Error 404. Not Found.");
});
