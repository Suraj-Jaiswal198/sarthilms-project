const express = require('express'); 
const router = express.Router(); 

//@routes GET api/posts
//@desc test routes
//@access public  
//routes for user operations would go here

router.get('/', (req, res)=> {
    res.send('Posts route'); 
}); 

module.exports = router;