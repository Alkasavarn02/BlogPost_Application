// function required for connecting to database.

const mongoose = require("mongoose")

require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then((res)=>{
        console.log("Connection With Database Successfully")
    })
    .catch((err)=>{
        console.log(err)
        console.log("Connection Failed")
        process.exit(1)
    })
}

module.exports = dbConnect;