
const POST = require("../models/postModel")


const getPostControllers = async (req,res) => {
    try {

        const response = await POST.find({})

        if (!response){
            res.status(404).json({
                success:false,
                data:"No data Found",
                message:"No data found"
            })
            
        }
        else {
            res.status(200).json({
                success:true,
                data:response,
                message:"all your Post visible"
                    
            })
        }

    }
    catch(err) {
        res.status(500).json({
            success:false,
            data:"Issue Faced in db",
            message:err.message
                
        })
    }
}

module.exports = getPostControllers;