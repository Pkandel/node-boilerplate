import express from 'express';
import userRoutes from './user.route';

const app = express();
const router = express.Router();

//using middleware
app.use(function (req, res, next) {
    next();
})

router.get(('/'), (req, res) => {
    return res.json( {
        success: true,
        message: "here you will quickely explore the end point",
        endPoints: [
            {
                url: "/api/users",
                message: "get all users data"
            },
            {                           
                url: "/api/users/save",
                message: "save user data"
            },
            {
                url: "/api/users/id",
                message: "get specific user on get request and delete on delete request"
            }
            
            ]
    })
});


//mount user routes at /users
 router.use('/users', userRoutes);

//mount auth routes at /auth


export default router;