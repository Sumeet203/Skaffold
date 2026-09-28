import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
res.send("Hello from Skaffold Dev Mode!");});

app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000");
})