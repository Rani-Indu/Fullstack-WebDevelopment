// documentation 1 - reference code 
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, '/tmp/my-uploads')
  //   },
  //   filename: function (req, file, cb) {
  //     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  //     cb(null, file.fieldname + '-' + uniqueSuffix)
  //     console.log(file);
      
      
  //   }
  // })
  
  // const upload = multer({ storage: storage })




import multer from "multer";
// code from documentation
const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, "./public/temp")
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname) 
     
    }
  })
  
  export const upload = multer({ 
      storage
  })

