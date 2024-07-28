const express = require("express");
const serverless = require("serverless-http");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    console.log("default route");

    res.send("Hello World !");
})

if (process.env.NODE_ENV === "development") {
    app.listen(PORT, () => {
        console.log(`app is running on ${PORT}`);
    })
}else{
    module.exports.handler = serverless(app);
}