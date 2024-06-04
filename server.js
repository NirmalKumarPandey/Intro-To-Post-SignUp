let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");


let app = express();
app.use(cors());
app.use(express.json());

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    password: String,
    mobile: String,
    profilePic: String,
})
let User = new mongoose.model("user", userSchema);


app.post("/register", async (req, res) => {

    try {
        let newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile,
            profilePiv: req.body.profilePic,
        })
        await User.insertMany([newUser]);

        res.json({ status: "Success", msg: "User Created Successfully" });

    }
    catch (err) {
        res.json({ status: "Failure", msg: "Unable to create User", err: err });

    }

    console.log(req.body);
    res.json(["User created successfully"]);

});
app.listen(4567, () => {
    console.log("Listening to port 4567");
})



let connectToTheMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Batch2402");
        console.log("Successfully connected to Mongo Database");
    }
    catch (err) {
        console.log("Unable to connect MDB" + err);
    }
}
connectToTheMongoDB();
