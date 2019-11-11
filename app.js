const express = require ('express');
const path = require ('path');

const app = express();
app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/', function (req , res) {
    res.render ('index');
});

app.listen(3000 ,()=>{
    console.log("server is running on port 3000");
});

module.exports = app;