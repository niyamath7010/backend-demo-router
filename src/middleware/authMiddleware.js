const jwt=require('jsonwebtoken')

const SECREATKEY="jervjbervoibervij"

function checkAutendiated(req, res, next) {
    const tokenString=req.headers['authorization']
    console.log(`tokenString = ${JSON.stringify(req.headers)}`);
    if(typeof tokenString !== 'undefined' && tokenString !==null){
        const actualToken=tokenString.split(' ')[1]
        if(typeof actualToken !=='undefined' && actualToken !==null){
            //verify
            let data=jwt.verify(actualToken,SECREATKEY)
            req.user=data;
            next()
        }else{
          res.status(401).send("pleace login before accessing the api")
        }
    }else{
        res.status(401).send("pleace login before accessing the api")
    }

}


module.exports={
    checkAutendiated
}