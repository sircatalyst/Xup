import express from "express";
import bodyParser from "body-parser";

import mealRoutes from "./routes/meal.route"
let app = express();
app.use(bodyParser.json());

let port = 1111;

app.get('/', (req, res) => {
    return res.send("it's fine!")
});

app.use('/api/v1/meals', mealRoutes)

app.listen(port, () => {
    console.log(`server running on ${port}`)
});