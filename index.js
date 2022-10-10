const express = require('express');
const moment = require('moment');
const mongoose = require('mongoose');
const orderRoutes = require("./routes/orders");
const userRoutes = require("./routes/users");
const CONFIG = require("./config/config")

const app = express()

app.use(express.json());


app.use(express.json());
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);


app.get('/', (req, res) => {
    return res.json({ status: true })
})



mongoose.connect(process.env.URL)

mongoose.connection.on("connected", () => {
	console.log("Connected to MongoDB Successfully");
});

mongoose.connection.on("error", (err) => {
	console.log("An error occurred while connecting to MongoDB");
	console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port, ',process.env.PORT)
})