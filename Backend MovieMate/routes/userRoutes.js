// import express from "express";
// import { UserLogin, UserRegister } from "../controllers/UserController.js";
// import { verifyToken } from "../middleware/verifyToken.js";


// const router = express.Router();

// router.post("/signup",UserRegister);
// router.post("/signin",UserLogin);

// export default router;

// import express from "express";
// import { login, register } from "../controllers/userController.js";

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// export default router;



import express from "express";
import { Login, Logout, Register } from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

export default router;