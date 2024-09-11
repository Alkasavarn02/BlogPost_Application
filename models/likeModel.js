const mongoose = require("mongoose")

const likesSchema = new mongoose.Schema(
    {
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"POST"
        },
        user:{
            type:String,
            require:true
        }
    }
)

module.exports = mongoose.model("Likes",likesSchema)