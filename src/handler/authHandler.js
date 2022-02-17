const service=require('../service/service')


function login(req,res) {
    const email=req.body.email
    const password=req.body.password

    let token=service.login(email,password)
    res.status(200).send(token)
    
}


module.exports={
    login
}