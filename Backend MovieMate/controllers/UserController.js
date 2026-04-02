// import bcrypt from "bcryptjs";
// import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
// import User from "../models/user.js";
// import { createError } from "../error.js";

// dotenv.config();
// export const UserRegister =async(req, res, next)=>{
//     try {
//         const{email,password,name,}=req.body;

//         const existingUser = await User.findOne({email}).exec();
//         if(existingUser){
//             return next(createError(409,"email is already in  use"))
//         }

//         const salt = bcrypt.genSaltSync(10);
//         const Hashedpassword = bcrypt.hashSync(password,salt);

//         const user =new User({
//             name,
//             email,
//             password: Hashedpassword,
//         });

//         const  createdUser = await user.save();
//         const token = jwt.sign(
//         { id: createdUser._id },
//          process.env.JWT_SECRET,
//         { expiresIn: "9999y" }
//         );
    
//         return  res.status(200).json({token,user})
//     } catch (error) {
//         next(error)
//     }
// }

// export const UserLogin = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     console.log("LOGIN BODY:", req.body);   // 👈 add
//     const user = await User.findOne({ email }).exec();

//     console.log("USER FOUND:", user);       // 👈 add

//     if (!user) {
//       return next(createError(404, "User NOT found"));
//     }

//     console.log("ENTERED PASSWORD:", password);   // 👈 add
//     console.log("HASH IN DB:", user.password);    // 👈 add

//     const isPasswordCorrect = bcrypt.compareSync(password, user.password);

//     console.log("PASSWORD MATCH:", isPasswordCorrect); // 👈 add

//     if (!isPasswordCorrect) {
//       return next(createError(403, "Incorrect Passward"));
//     }

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "9999y" }
//     );

//     return res.status(200).json({ token, user });

//   } catch (error) {
//     next(error);
//   }
// };


// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/user.js";

// // REGISTER
// export const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const exist = await User.findOne({ email });
//     if (exist) {
//       return res.status(400).json({
//         message: "Email already exists",
//         success: false,
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "Signup successful",
//       success: true,
//     });

//   } catch (error) {
//     console.log(error);
//   }
// };

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({
//         message: "Invalid email",
//         success: false,
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({
//         message: "Invalid password",
//         success: false,
//       });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//     res.status(200).json({
//       message: "Login successful",
//       success: true,
//       token,
//     });

//   } catch (error) {
//     console.log(error);
//   }
// };

import  User  from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });
        }
       const tokenData = {
        id:user._id
       }
        const token = await jwt.sign(tokenData, "dfbvdkjzfnvkjzdnfvkzdnjf",{expiresIn:"1h"});

        return res.status(200).cookie("token", token).json({
            message:`Welcome back ${user.fullName}`,
            user,
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}

export const Logout = async (req,res) => {
    return res.status(200).cookie("token", "", {expiresIn:new Date(Date.now()), httpOnly:true}).json({
        message:"User logged out successfully.",
        success:true,
    });
}

export const Register = async (req,res) =>{
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }

        const hashedPassword = await bcryptjs.hash(password,16);

        await User.create({
            fullName,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:"Account created successfully.",
            user,
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
};
