const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const categoryRouter = require('./routers/category')
app.use('/category', categoryRouter)

const filteredYojanas = require('./routers/filteredYojanas')
app.use('/filteredYojanas', filteredYojanas)

const searchYojanas = require('./routers/searchYojanas')
app.use('/searchYojanas' , searchYojanas)

const listofYojanas = require('./routers/listofYojanas')
app.use('/listofYojanas', listofYojanas)

const saveform = require('./routers/saveform')
app.use('/saveform', saveform)

const inputmobnoRouter = require('./routers/inputmobno')
app.use('/inputmob', inputmobnoRouter)

const verifyotpRouter = require('./routers/verifyotp')
app.use('/verifyotp', verifyotpRouter)



app.listen(9002, () => {
    console.log("Server Started on port 9002")
})