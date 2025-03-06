




module.exports.homePage = (req, res)=>{
    res.render("index")
    }

 module.exports.aboutPage = (req, res)=>{
        res.render("aboutus")
   }
    
   module.exports.loginPage = (req, res)=>{
    res.render("aboutus")
}
    
module.exports.registerPage = (req, res)=>{
       res.render("register")
 }
    
 module.exports.loginAdmin = (req, res) =>{
        res.render('loginAdmin');
 }