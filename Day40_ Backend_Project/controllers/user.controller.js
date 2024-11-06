import { asyncHandler } from "../utils/asyncHandler.js";

const registerUsee = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

