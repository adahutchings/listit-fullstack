var app = require('express')(),
    lists = require('./server/controllers/listController');;

app.get('/lists', lists.index);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log("server is listening for requests on port: ", app.get('port'));
});