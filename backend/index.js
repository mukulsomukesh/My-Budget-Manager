const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// index route
app.get("/",(req, res)=>{
    res.status(200).json({message:"Welcome to My-Budget-Manager"})
})

const port = process.env.PORT || 9001
app.listen(port, console.log("Server running at port ", port))