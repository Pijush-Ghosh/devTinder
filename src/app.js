const express = require('express');

const app = express();

app.use("/home", (req, res) => {
    res.send("Hello from server")
});
app.use("/api", (req, res) => {
    res.send("this is api path");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})