
const POST = require("../models/postModel")


const createPostController = async (req,res) => {

    try {
        const {title,description} = req.body

        const post = new POST({
            title,description
        })

        const savePost = await post.save()

        res.status(200).json(
            {
                success:true,
                data:savePost,
                message:"Blog Successfully Posted into th db"
            }
        )
    }
    catch(err) {
        res.status(500).json(
            {
                success:false,
                data:"Entry Failed",
                message:err.message
            }
        )
    }

}

module.exports = createPostController;