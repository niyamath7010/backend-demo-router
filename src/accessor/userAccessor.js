const {userRoles}=require('../content/userRole')

const dummyData=[
    {

        'email':'pysboy@gmail.com',
        'password':'hello1',
        'role':userRoles.Admin
    },
    {
        'email':"niyamath@gmail.com",
        'password':'hello2',
        'role':userRoles.Student
    }
]

function getUser(email){
    for(i=0;i<dummyData.length;i++){
        if(dummyData[i].email===email){
            return dummyData[i]
        }
    }
    return undefined
}

module.exports={
    getUser
}