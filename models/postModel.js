
const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        likes:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Likes"
            }
        ],
        Comments:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Comment"
            }
        ]
    }
)

module.exports = mongoose.model("POST",PostSchema)