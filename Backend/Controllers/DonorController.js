const Donor = require('../Models/Donor')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

let signup = (req, res) => {
    console.log("Sign Up method in Donor Controller called")

    Donor.findOne({email: req.body.email}) //First, I will check if the email already exists. If it does, I will not create the account
    .then((existingDonor) => {

        if (existingDonor)
        {
            return res.status(400).send({message: "Donor Account already exists with this email!"})
        }

        let donor = new Donor({
            name: req.body.name,
            CNIC: req.body.CNIC,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            password: req.body.password,
            city: req.body.city,
            //Blood group is determined later, default value will be used
            //Role is automatically assigned the default value
        })

        donor.save()
        .then((donor) => {
            res.status(200).send({message: "Donor Account created successfully!", donor: donor})
        })
        .catch((err) => {
            res.status(400).send({message: "Error occurred while creating Donor Account", error: err})
        })
        
    })
    .catch((err) => {
        console.log("Error occurred while checking if the email already exists in the database")
    })

}

let login = (req, res) => {
    console.log("Login method in Donor Controller called")

    let email = req.body.email
    let password = req.body.password
    let secretKey = process.env.SECRET_KEY
    Donor.findOne({email: email})
    .then((donor) => {
        if (donor)
        {
            if (donor.password === password)
            {
                let token = jwt.sign({email: email}, secretKey, {expiresIn: '1h'})
                res.status(200).send({message: "Login Successful", token: token})
            }

            else
            {
                res.status(401).send({message: "The password is incorrect"})
            }
        }

        else
        {
            res.status(404).send({message: "No Donor Account exists with this email"})
        }
        
    })
    .catch((err) => {
        res.status(404).send({message: "An error occurred during login", error: err.message})
    })

}

module.exports = {
    signup,
    login
}