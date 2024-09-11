
const express = require("express")

const app = express()

app.use(express.json())

const router = require("./routes/routes")
app.use("/api/v1",router)

require("dotenv").config()
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server started at ${PORT} successfully`)
})

const dbConnect = require("./config/databaseConnection")
dbConnect()

app.get("/",(req,res)=>{
    res.send("Blog Post Application")
})