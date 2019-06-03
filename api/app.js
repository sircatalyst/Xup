import express from "express";
import bodyParser from "body-parser";

let app = express();
app.use(bodyParser.json());

let port = 1111;

app.get('/', (req, res) => {
    return res.send("it's fine!")
});

app.listen(port, () => {
    console.log(`server running on ${port}`)
});