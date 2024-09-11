
const POST = require("../models/postModel")
const Comment = require("../models/commentModel")


const commentControllers = async (req,res) => {
    try {

        // sbse pehle new comment ko db mai save/create krenge
        const {post,user,body} = req.body

        const newComment = new Comment({
            post,user,body
        })

        const updatedComment = await newComment.save()

        // new comment aane se post pr v update hona chahey do ab hum post ko v new comment k sath update krenge.
        const response = await POST.findByIdAndUpdate(post,{$push:{Comments:updatedComment._id}},{new:true})
        .populate("Comments").exec()

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"new comment entry successful"
            }
        )

    }
    catch(err) {
        res.status(500).json({
            success:false,
            data:"Issue Faced in db",
            message:err.message
                
        })
    }
}

module.exports = commentControllers;