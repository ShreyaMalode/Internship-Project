// import mongoose from "mongoose";

// const Userschema =new mongoose.Schema({
//     name:{
//         type: String,
//         required: true,
//     },
//      email:{
//         type: String,
//         required: true,
//         unique:true,

//     },
//      password:{
//         type: String,
//       default: null,
//     },
//      age:{
//         type: Number,
       
//     },
// },{timestamps:true})

// export default mongoose.model("User",Userschema)

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);