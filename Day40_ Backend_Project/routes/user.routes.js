
import { Router } from "express";

import { loginUser, logoutUser, registerUser, refreshAccessToken} from "../controllers/user.controller.js";
// for- // export default registerUser
// import registerUser from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "./auth.middleware.js";



const router = Router()
// const router = express.Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)


router.route("/login").post(loginUser)
 
//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken) 





export default router
