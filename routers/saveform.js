const express = require('express');
const router = express.Router();



var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/applicants");

var nameSchema = new mongoose.Schema({
    aadharNumber: String,
    accountNumber: String,
    addressLineOne: String,
    addressLineTwo: String,
    age: String,
    bankName: String,
    bplNumber: String,
    branchName: String,
    caste: String,
    fullName: String,
    gaurdianName: String,
    gender: String,
    ifscCode: String,
    income: String,
    mobileNumber: String,
    mobileVerified: Boolean,
    religion: String,
    sentOtp: Boolean,
    wardNumber: String,
    id: String,
    yojanaName: String
});
var Users = mongoose.model("Users", nameSchema);

router.post('/', async(req,res) => {
    //setting the Form ID

    formData = req.body;
    formData.id = req.body.mobileNumber + req.body.wardNumber
    
    var myData = new Users(formData);
    myData.save()
        .then(item => {
            res.send("Form saved to database with ID " + formData.id);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
})

module.exports = router