const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const dbUrl = "mongodb+srv://testing1:testing1@testing1.qlzmz5o.mongodb.net/?retryWrites=true&w=majority"

const dataSchema = new mongoose.Schema({
    title : {type: String, required : true},
    text : {type : String, required : true},
    createDate : {type : Date, default : Date.now}, 
});

const dataModel = mongoose.model("Message",dataSchema);

async function connectDB(){
    console.log("DB : connectiong");
    await mongoose.connect(dbUrl);
    console.log("DB : connected");
}

async function disconnectDB(){
    console.log("DB : closing");
    await mongoose.connection.close();
    console.log("DB : disconnected");
}

async function getDataList(){
    await connectDB();
    const dataList = await dataModel.find();
    await disconnectDB();
    return dataList;
}

async function assignData(title, text){
    await connectDB();
    const newData = new dataModel({
        title : title,
        text : text,
    });
    const savedData = await newData.save();
    console.log("Save new Data");
    console.log(savedData);
    await disconnectDB();
}


module.exports = {assignData, getDataList};