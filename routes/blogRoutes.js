const express = require("express");
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdControlller, deleteBlogController, userBlogController } = require("../controllers/blogController");

//router object
const router = express.Router()

//routes
//GET||all blogs
router.get('/all-blog',getAllBlogsController);

//POST || create blog
router.post('/create-blog',createBlogController);

//PUT || update blog
router.put('/update-blog/:id',updateBlogController);

//GET||Single Blog Details
router.get('/get-blog/:id',getBlogByIdControlller);

//Delete || delete blog
router.delete('/delete-blog/:id',deleteBlogController);

//Get || user blog
router.get('/user-blog/:id',userBlogController);
module.exports = router