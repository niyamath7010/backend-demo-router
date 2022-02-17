const express=require('express')

const router=express.Router()

const handler=require('../handler/hanlder')

const {checkAutendiated}=require('../middleware/authMiddleware')

const {checkIfAuthorize}=require('../middleware/authorization')

const {userRoles}=require('../content/userRole')

router.get('/:actor', checkAutendiated,checkIfAuthorize([userRoles.Admin]),handler.getPage)
router.put('/:actor',handler.putPage)
router.post('/:actor',handler.postPage)
router.delete('/:actor',handler.deletePage)


module.exports=
    router; 