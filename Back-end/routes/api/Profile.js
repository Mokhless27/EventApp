const express = require ('express')
const router = express.Router()
const auth = require('../../middleware/auth')

//Profile module 
const Profile= require ('../../models/user')


// @route   GET api/profiles
// @desc    get all profiles
// @acess   private 


router.get('/', auth,async (req,res)=>{
    try {
        const profile = await Profile.find({} , (err ,data ) => {
          if (err) console.log('problem')
          res.json(data)
        })
   
    } catch (err) {
        console.error(err.message)
        console.log('server error ')
    }
  })


  // @route Post api/profiles
// @desc  upload profile image 
// @access Private

router.post('/upload/image',auth, (req,res)=>{
  if (req.files===null){
      return res.status(400).json({msg : 'no file was uploaded'})
  }
  const file = req.files.imageUp;

  file.mv(`${__dirname}/../../../event_demo/public/uploads/profile/${file.name}`, err => {
      if (err){
          console.error(err)
          return res.status(500).send(err)
      }
      // 7ajet eli béch  né5ouhom  
      res.json({fileName:file.name,filePath:`/uploads/profile/${file.name}` })
  })
})



// @route   POST api/profiles
// @desc    update profile
// @acess   private 
  router.put('/updateprofile/:id',async (req,res)=>{ 
      try {
            const profile = await  Profile.findOneAndUpdate({_id :req.params.id}, {
               $set: 
               {
                 name:req.body.firstname,
                 lastname: req.body.lastname,
                 email: req.body.email ,
                 dateOfhbirth: req.body.birthday,
                 avatar:req.body.avatar,
                 phoneNumber:req.body.phonenumber 
                 } })
            // const Updater = await Event.update({_id:user.id} {set :{avatar : req.body.avatar}})


            console.log(profile)
            res.json(profile)


            

      } catch (err) {
          console.error(err.message)
          res.status(500).send('ServerError')
      }
  
     
                    
  }
  
  );

  module.exports = router;