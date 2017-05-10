import User from '../models/user.model';
import axios from 'axios';

//get all users
function list(req, res, next) {
    User.find((err, users) => {
        if (err) {
            res.send(err);
        }
        if (users.length === 0) {
            return res.json({
                message: "No user"
            })
        }
        return res.json(users)
    })
}

//save user to the database
function save(req, res, next) {
    const user = new User({
        name: "prakash"
    });

    user.save((err) => {
        if(err) 
             {
            return res.json({
                success: false,
                message: err
            });
        }
        return res.json({
            success: true,
            message: "successfully saved user to the database"
        });

    })
}
//get one records provided that the id of user
function findOne(req, res, next) {
    User.findOne(({ id: req.params.id }), (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: err
            });
        }

        return res.json({
            success: true,
            message: user
        });
    })
}
//remove one record provided that the id of user
function remove(req, res, next) {
    User.remove(({ id: req.params.id }), (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: err
            });
        }
        return res.json({
            success: true,
            message: "User successfully deleted with id " + req.params.id
        })
    })
}

export default { list, save, remove, findOne };