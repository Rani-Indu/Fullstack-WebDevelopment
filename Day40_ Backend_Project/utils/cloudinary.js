import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_ssecret: process.env.CLOUDINARY_API_SECRET 
});


// const uploadOnCloudinary = async () => {}
// const uploadOnCloudinary = async () => {
//     try {
        
//     } catch (error) {
        
//     }
// }
const uploadOnCloudinary = async (localFilePath) => {
    try {
        
    } catch (error) {
        
    }
}