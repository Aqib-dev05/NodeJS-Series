import mongoose, { Model } from "mongoose";
import { Schema } from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then((res) => console.log("Connected! "))
  .catch((err) => console.log("Error"));

//first of all,We create a schema with validations.Then models are used to created docs
const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

//!in models,First argument is collectionName and second is schema name.
//* We can perform queries directly via model.query like "model.find" bacause variable name of model is assuming the collection name
//? const Collection = moongose.model("Colletion",schema)

const User = mongoose.model("User", userSchema);

// const user1 = User.insertOne({
//   name: "Aqib Ali",
//   email: "hello@email.com",
//   age: 20,
// });

//many insertion
// User.insertMany([
//   {
//     name: "Aqib Ali",
//     email: "hello@email.com",
//     age: 20,
//   },
//   {
//     name: "Asad ",
//     email: "jiyo@email.com",
//     age: 30,
//   },
//   {
//     name: "Alice",
//     email: "aqya@email.com",
//     age: 20,
//   },
//   {
//     name: "Aqib Aaali",
//     email: "hello@email.com",
//     age: 20,
//   },
//   {
//     name: "Aqibali",
//     email: "hello@email.com",
//     age: 20,
//   },
// ]);

//?to find data
  await User.find()
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})