const express = require('express')
const app = express()

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Banco',
    database: 'Principal'
});
connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('connected to my server');
})

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/Js'));
app.get('/', (req, res) =>
    res.render('index')
)
app.listen(3000, () => console.log('Server running in port 3000!'))