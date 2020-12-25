const express = require ('express')
const router = express.Router()
const {check, validationResult} = require ('express-validator/check')
const Post=require('../../models/Post')
const User=require('../../models/user')
const auth = require('../../middleware/auth')




// @route Post api/posts
// @desc Create a post
// @access Private
router.post('/add',
[ 
    auth,
    [
    check('text',' is required').not().isEmpty()
    
     ]
],

async (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
    {
        res.status(400).json({errors:errors.array()});   
    }
    
    try {


        const user = await  User.findById(req.user.id).select('-password');
        console.log('the user',user)
        const newPost= new Post ({
            text:req.body.text,
            name:user.name,
            avatar:user.avatar,
            user:req.user.id
        })

        const post= await newPost.save()

        res.json(post)
        

    } catch (err) {
        console.error(err.message)
        res.status(500).send('ServerError')
    }

   
                  
}

);


//@route Get api/evenement
//@desc get all posts
//@access Private
router.get('/' , async (req,res)=>{
    try {
        const posts=await Post.find()
        res.json(posts)
    } catch (err) {
        console.error(err.message)
        return res.status(500).send('ServerError')
    }
});



//@route DELETE api/posts/:id
//@desc delete a post
//@access Private
router.delete('/:id', auth , async (req,res)=>{
    try {
        const post=await Post.findById(req.params.id)
        if(!post){
            return res.status(404).json({msg:'Event not found'})
        }
        //check user
        if(post.user.toString() !== req.user.id){ //bechmayfasakh levent ken user ili habtou dsl karim 
            return res.status(401).json({msg:'User not authorized'});
        }
        await post.remove()
        res.json({msg:'post removed'})
    } catch (err) {
        console.error(err.message)
        if(err.kind=== 'ObjectId'){
            return res.status(404).json({msg:'Event not found'})
        }
        return res.status(500).send('ServerError')
    }
}); 



//@route Get api/posts/:id
//@desc get post by ID
//@access public
router.get('/:id' , async (req,res)=>{
    try {
        const post=await Post.findById(req.params.id) 
       if(!post){
           return res.status(404).json({msg:'Event not found'})
       }
        res.json(post)

    } catch (err) {
        console.error(err.message)
        
        if(err.kind=== 'ObjectId'){
            return res.status(404).json({msg:'Event not found'})
        }

        return res.status(500).send('ServerError')
    }
});

//@route PUT api/post/like/:id
//@desc like a post
//@access Private
router.put('/like/:id',auth,async (req,res) =>{
    try {
        const event = await Evenement.findById(req.params.id);
        
        //check if the the post has already been liked
        if(event.likes.filter(like => like.user.toString() === req.user.id).length > 0){
            return res.status(400).json({msg:"Event already liked"})
        }
 
        event.likes.unshift({ user: req.user.id})
        await event.save();
        res.json(event.likes);
 
    } catch (err) {
     console.error(err.message)
     return res.status(500).send('ServerError')
    } 
 });
 
 


module.exports = router
