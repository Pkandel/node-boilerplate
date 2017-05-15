import User from '../models/user.model';
import axios from 'axios';


//get all users
function list(req, res, next) {
  User.find((err, users) => {
    if (err) {
     return res.json({
        status: "error",
        message: "error fetching users"
      });
    }
    if (users.length === 0) {
      return res.json({
        status: "success",
        data: null,
        message: "no user in database"
      });
    }
    return res.json({    
      status: "success",
      data: users,
      message: "list of users"
    });
  })
}

//save user to the database
function save(req, res, next) {
  console.log(req.body.name);
  if(req.body.name === undefined) {
    return res.json({
      status: "error",
      message: "can not get user name"
    });
  }
  const user = new User({
    name: req.body.name
  });

  user.save((err) => {
    if (err) {
      return res.json({
        status: "error",
        message: "error saving user"
      });
    }
    return res.json({
      status: "success",
      message: "successfully saved user to the database"
    });

  })
}
//get one records provided that the id of user
function findOne(req, res, next) {
  User.findOne(({ id: req.params.id }), (err, user) => {
    if (err) {
      return res.json({
        status: "error",
        message: "error getting user with id " + req.params.id
      });
    }

    return res.json({
      status: "success",
      data: user,
      message: "user details"
    });
  })
}
//remove one record provided that the id of user
function remove(req, res, next) {
  User.remove(({ id: req.params.id }), (err, user) => {
    if (err) {
      return res.json({
        status: "error",
        message: "error deleting user with id " + req.params.id
      });
    }
    return res.json({
      status: "success",
      message: "User successfully deleted with id " + req.params.id
    })
  })
}

export default { list, save, remove, findOne };