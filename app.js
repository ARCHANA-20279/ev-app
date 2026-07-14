const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



mongoose.connect("mongodb://archana:archana@ac-58g5bmi-shard-00-00.5ys18b0.mongodb.net:27017,ac-58g5bmi-shard-00-01.5ys18b0.mongodb.net:27017,ac-58g5bmi-shard-00-02.5ys18b0.mongodb.net:27017/coursedb?ssl=true&replicaSet=atlas-cngkhq-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(err);
});



const bookingSchema = new mongoose.Schema({

    booking_id:String,
    fullname:String,
    email:String,
    phone:String,
    vehicleno:String,
    vehiclebrand:String,
    vehiclemodel:String,
    battery:String,
    connector:String,
    chargingdate:String,
    time:String,
    unit:String,
    chargingno:String

});


const Booking = mongoose.model("Booking",bookingSchema);



app.post("/add-booking",async(req,res)=>{

    const data = new Booking(req.body);

    await data.save();

    res.send({
        message:"Booking Added Successfully"
    });

});



app.post("/view-booking",async(req,res)=>{

    const data = await Booking.find();

    res.send(data);

});


app.listen(3000,()=>{
    console.log("Server running on port 3000");
});