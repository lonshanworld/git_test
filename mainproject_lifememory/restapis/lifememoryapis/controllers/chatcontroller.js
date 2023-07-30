const tokenUser = require("../utils/getIdfromToken");
const {query, validationResult, matchedData} = require("express-validator");
const asyncHandler = require("express-async-handler");
const usermodel = require("../models/usermodel");
const chatmodel = require("../models/chatmodel");

const getchatId = [
    query("friendId").notEmpty().escape().withMessage("Something wrong with your query"),
    asyncHandler(async(req, res)=>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const data = matchedData(req);
            const userData = await tokenUser(req);
            console.log("This is user id " + userData._id);
            const friendata = await usermodel.findById(data.friendId).exec();
            console.log("This is friend id" + friendata._id);
            console.log("This is friend id" + data.friendId);
            if(friendata){
                const checkId = await chatmodel.findOne({users : {$all : [userData._id, friendata._id]}}).exec();
                if(checkId){
                    // await chatmodel.deleteMany({});
                    res.status(200).send({
                        chatId : checkId._id
                    });
                }else{
                    const newchatId = new chatmodel({
                        users : [userData._id, friendata._id],
                    });
                    await newchatId.save().then(async(success)=>{
                        userData.chats.push(newchatId._id);
                        friendata.chats.push(newchatId._id);
                        await userData.save();
                        await friendata.save();
                        res.status(200).send({
                            chatId : newchatId._id,
                        });
                    }).catch((err)=>{
                        res.status(400);
                        res.statusMessage = err.toString();
                        res.end();
                    });
                }    
 
            }else{
                res.status(400);
                res.statusMessage = "User not found";
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
    getchatId,
};