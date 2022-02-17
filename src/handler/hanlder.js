function getPage(req,res) {
    res.send("your in the home page")
}

function putPage(req,res){
    res.send("your in the contact page")
}

function postPage(req,res) {
    res.send("your in the posting page")
}

function deletePage(req,res) {
    res.send("your in the deleting page")
}

module.exports={
    getPage,
    putPage,
    postPage,
    deletePage
}