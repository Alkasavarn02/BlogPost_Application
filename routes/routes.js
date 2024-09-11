const express = require("express")

const router = express.Router()

const createPostController = require("../controllers/createPostController")

router.post("/createPost",createPostController)

const likeControllers = require("../controllers/likecontrollers")
router.post("/likePost",likeControllers)

const commentControllers = require("../controllers/commentControllers")
router.post("/commentPost",commentControllers)

const getPostControllers = require("../controllers/getPostControllers")
router.get("/getPost",getPostControllers)

module.exports = router;