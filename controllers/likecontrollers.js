
const POST = require("../models/postModel")
const Likes = require("../models/likeModel")

const likeControllers = async (req,res) => {
    
    try {
        // like jo aaeynge usko hume db mai store krni hai.
        
        const {post,user} = req.body

        const newLike = new Likes({
            post,user
        })

        const updatedlike = await newLike.save()

        // Post mai like ko v update krni hai

        const response = await POST.findByIdAndUpdate(post,{$push : {likes:updatedlike._id}},{new:true}).populate("likes").exec()

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Liked Sucessfully"
            }
        )

    }
    catch (err) {
        res.status(500).json({
            success:false,
            data:"Issue Faced in db",
            message:err.message
                
        })
    }
}

module.exports = likeControllers;