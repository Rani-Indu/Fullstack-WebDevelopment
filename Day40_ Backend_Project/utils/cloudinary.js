import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
// fs - file system - https://nodejs.org/api/fs.html 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
         
        if (!localFilePath) return null
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            // ctrl + space to see available options 
            resource_type: "auto"    
        })
        console.log(response);

        // file has been uploaded successfully
        console.log("file is uploaded successfully", response.url);
         
        return response;
         
        
        
    } catch (error) {

        fs.unlinkSync(localFilePath) // removes the locally saved temporary file as the upload operation got failed
        return null; 
    }
}


export {uploadOnCloudinary}