const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    if (req.headers["user-agent"].includes("curl")) {
        res.send(
            "<head><link flag='password is LD5-20-24 remember this'><title>War Games</title></head><h1>Code is not here but work is half done !</h1>"
        );
    } else {
        res.send(
            "<head><link flag='Don't be oversmart'><title>War Games</title></head><h1>You are good in browsing but not in linux! youn should try_this_one </h1>"
        );
    }
});

app.get("/api/destination/2024", (req, res) => {
    if (req.headers["user-agent"].includes("curl")) {
        res.send(
            "<head><link flag='You are smart but you cannot GET me'><title>War Games</title></head><h1>You ar near, show some inspecting skills</h1>"
        );
    } else {
        res.send(
            "<head><link flag='You are just wandering'><title>War Games</title></head><h1>You are just wandering</h1>"
        );
    }
});

app.post("/api/destination/20244", (req, res) => {
    if (req.headers["user-agent"].includes("curl")) {
        res.send("FLAG : WLUG{TANS8759}");
    }else{
        res.send("Expected better from you");
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
