import User from '../models/user.model';


// get all users
function list(req, res) {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        type: 'error',
        message: 'Error Fetching User',
        res,
      });
    }
    if (users.length === 0) {
      return this.Success({
        data: null,
        message: 'no user in database',
        res,
      });
    }
    return res.json({
      status: 'success',
      data: users,
      message: 'list of users',
    });
  });
}

// save user to the database
function save(req, res) {
  console.log(req.body.name);
  if (req.body.name === undefined) {
    return res.json({
      status: 'error',
      message: 'can not get user name',
    });
  }
  const user = new User({
    name: req.body.name,
  });

  user.save((err) => {
    if (err) {
      return res.json({
        status: 'error',
        message: 'error saving user',
      });
    }
    return res.json({
      status: 'success',
      message: 'successfully saved user to the database',
    });
  });
  return res.json({
    status: 'success',
    message: 'successfully saved user to the database',
  });
}
// get one records provided that the id of user
function findOne(req, res) {
  User.findOne(({ id: req.params.id }), (err, user) => {
    if (err) {
      return res.json({
        status: 'error',
        message: `error getting user with id ${req.params.id}`,
      });
    }

    return res.json({
      status: 'success',
      data: user,
      message: 'user details',
    });
  });
}
// remove one record provided that the id of user
function remove(req, res) {
  User.remove(({ id: req.params.id }), (err, user) => {
    if (err) {
      return res.json({
        status: 'error',
        message: `error deleting user with id ${req.params.id}`,
      });
    }
    return res.json({
      status: 'success',
      data: user,
      message: `User successfully deleted with id ${req.params.id}`,
    });
  });
}
export { list, save, findOne, remove };
