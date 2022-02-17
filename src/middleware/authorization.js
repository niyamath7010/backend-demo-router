function checkIfAuthorize(allowedRoles) {
    return function (req,res,next) {
        let userRole=req.user.role;
        let isAuthorize=false
        for( let i = 0; i < allowedRoles.length; i++){
            if(allowedRoles[i]===userRole){
                isAuthorize=true;
                break
            }
        }
        if(isAuthorize){
            next()
        }
        else{
            res.status(403).send("you dont have access")
        }
    }
}

module.exports={
    checkIfAuthorize
}