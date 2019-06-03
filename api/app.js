import express from "express";


let app = express();
let port = 1111;

app.get('/', (req, res) => {
    return res.send("it's fine!")
});

app.listen(port, () => {
    console.log(`server running on ${port}`)
});