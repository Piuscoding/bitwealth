














module.exports.loginAdmin_post = async(req, res) =>{
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({email: email});
  
      if(user){
      const passwordMatch = await (password, user.password);
  
      if (passwordMatch) {
        
        if(!user.role == "admin"){
          res.render('login', handleErrors('Email and password is incorrect') )
        }else{
          const token = createToken(user._id);
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(200).json({ user: user._id });
        }
        
      } else {
        res.render('login', handleErrors() )
      }
      } else{
        res.render('login',handleErrors() )
      }
      
    } catch (error) {
      console.log(error)
    }
      
  }

