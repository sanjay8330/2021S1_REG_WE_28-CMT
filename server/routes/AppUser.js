const router = require('express').Router();
const UserModel = require('../models/AppUser');

//Add a user - ADMIN TASK
router.route('/addUser').post(async (req, res) => {
    if(req.body){
        const User = new UserModel(req.body);
        await User.save()
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

//Get all users - ADMIN TASK
router.route('/getAllUsers').get(async (req, res) => {
    await UserModel.find({})
    .then(data => {
        res.status(200).send({data: data});
    }).catch(error => {
        res.status(500).send({error: error});
    })
});

//Get the user by ID - ADMIN TASK
router.route('/getUserById/:id').get(async (req, res) => {
    if(req.params && req.params.id){
        await UserModel.findById(req.params.id)
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

//Update the user details - ADMIN TASK (SOME LOGICS TO BE IMPLEMENTED)
router.route('/updateUserById').put(async (req, res) => {
    if(req.body){

    }
})

//Delete the user - ADMIN TASK
router.route('/deleteUser/:id').delete(async (req, res) => {
    if(req.params && req.params.id){
        await UserModel.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

//Validate the user - ALL USERS TASK
router.route('/validateUser/:emailID').get(async (req, res) => {
    if(req.params && req.params.emailID){
        await UserModel.find({userEmail: req.params.emailID })
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
})

module.exports = router;