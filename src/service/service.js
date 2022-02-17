
const jwt=require('jsonwebtoken')
const acessor=require('../accessor/userAccessor')
const SECREATKEY="jervjbervoibervij"

function login(email , password) {
    let user=acessor.getUser(email)
    if(typeof user==='undefined'){
        throw Error("invalid eail / password")
    }else if(user.password===password){
        let data={
            email:email,
            role:user.role
        }
        const token=jwt.sign(data, SECREATKEY)
        return token
    }else{
        throw Error ("invalid email / password")
    }
    
}
      

module.exports={
    login
}