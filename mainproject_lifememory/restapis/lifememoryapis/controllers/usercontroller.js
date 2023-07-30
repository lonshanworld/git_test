const asyncHandler = require("express-async-handler");
const userModel = require("../models/usermodel");
const tokenUser = require("../utils/getIdfromToken");
const {query, validationResult, matchedData} = require("express-validator");
const usermodel = require("../models/usermodel");


const userProfile = asyncHandler(async(req, res)=>{
    // const bearerHeader = req.headers["authorization"];
    // const bearer = bearerHeader.split(" ");
    // const token = bearer[1];
    // const decodeduserid = jwt.verify(token,process.env.JWT_SECRETKEY);

    const userdata = await tokenUser(req);

    if(userdata){
        res.status(200).send({
            message: {userdata},
        });
    }else{
        // res.status(500).json({
        //     message: "Something went wrong with server.",
        // });
        res.status(500);
        res.statusMessage = "Something went wrong with server.";
        res.end();
    }
});


const getProfiledata = [
    query("userId").notEmpty().escape().withMessage("Something went wrong with your query"),
    asyncHandler(async(req, res)=>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const data = matchedData(req);

            const userData = await userModel.findById(data.userId).select("-password");
            // let postList = [];
            // for(let a = 0; a < userData.posts.length; a++){

            // }
            if(userData){
                res.status(200).send({
                    "message" : {userData}
                });
            }else{
                res.status(404);
                res.statusMessage = "User not found";
                res.end();
            }
        }else{
            res.status(500);
            res.statusMessage = "Something went wrong with your query.";
            res.end();
        }
    }),
];


const addfriend = [
    query("friendId").notEmpty().escape().withMessage("Something went wrong with your query"),
    asyncHandler(async(req, res)=>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const data = matchedData(req);
            const userData = await tokenUser(req);

            const getfriendData = await userModel.findById(data.friendId).exec();
            if(getfriendData){
                userData.friends.push(getfriendData._id);
                getfriendData.friends.push(userData._id);
                await userData.save().then(async(success)=>{
                    await getfriendData.save().then((value)=>{
                        res.status(200).send({
                            message : "Friend added successfully"
                        });
                    });
                }).catch((err)=>{
                    res.status(500);
                    res.statusMessage = "Something went wrong with server while adding friend. Please try again later";
                    res.end();
                });
            }else{
                res.status(404);
                res.statusMessage = "Did not found the user";
                res.end();
            }

        }else{
            res.status(400);
            res.statusMessage = "Wrong query";
            res.end();
        }
    }),
];


const removefriend = [
    query("friendId").notEmpty().escape().withMessage("Something went wrong with your query"),
    asyncHandler(async(req, res)=>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const data = matchedData(req);
            const userData = await tokenUser(req);
            const getfrienddata = await usermodel.findById(data.friendId).exec();

            if(getfrienddata){
                await userModel.findByIdAndUpdate(
                    {_id : userData._id},
                    {$pull : {friends : getfrienddata._id}},
                    {new : true, safe : true}
                ).exec().then(async(success)=>{
                    await userModel.findByIdAndUpdate(
                        {_id : getfrienddata._id},
                        {$pull : {friends : userData._id}},
                        {new : true, safe : true}
                    ).exec().then((su)=>{
                        res.status(200).send({
                            message : "Friend removed successfully"
                        });
                    }).catch((er)=>{
                        res.status(500);
                        res.statusMessage = "Something went wrong. Please try again later";
                        res.end();
                    });
                }).catch((err)=>{
                    res.status(500);
                    res.statusMessage = "Something went wrong. Please try again later";
                    res.end();
                });
            }else{
                res.status(400);
                res.statusMessage = "Did not found the user";
                res.end();
            }
        }else{
            res.status(400);
            res.statusMessage = "Wrong query";
            res.end();
        }
    }),
];

module.exports = {
    userProfile,
    addfriend,
    removefriend,
    getProfiledata,
};