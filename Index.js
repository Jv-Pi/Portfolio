const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(Portfolio + '/views/css'));
app.get('/', (req, res) =>
    res.render('index')
)
app.listen(3000, () => console.log('Server running in port 3000!'))