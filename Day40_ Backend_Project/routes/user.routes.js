
import { Router } from "express";

import { registerUser} from "../controllers/user.controller.js";
// for- // export default registerUser
// import registerUser from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"



const router = Router()

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
// registerUser method se pehle middleware 

export{ registerUser}
export default router
