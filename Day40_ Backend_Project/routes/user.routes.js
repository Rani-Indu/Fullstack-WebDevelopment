
import { Router } from "express";

// export default registerUser
// import registerUser from "../controllers/user.controller.js";

export{ registerUser}
import { registerUser} from "../controllers/user.controller.js";


const router = Router()

router.route("/register").post(registerUser)

export default router
