const listQueries = require("../queries/queries.lists.js");


module.exports = {

    index(req, res) {
        listQueries.getAllLists((err, lists) => {
            if(err){
                res.status(500).json(err);
            } else {
                res.status(200).json(lists);
            }
        })
    },


}