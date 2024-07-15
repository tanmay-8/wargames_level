const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Code is not here , you are at wrong place ! But work is half done , keep going !")
});


app.listen(5000, () => {
    console.log("Server is running on port 5000")
})


