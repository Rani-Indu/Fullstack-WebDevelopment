const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      // console.log(file); // study result of this 
      
      cb(null, file.originalname) 
     
    }
  })
  
  export const upload = multer({ 
      storage,
  })

  // ye destination lo , jo pat hai (./public/temp) waha pe file ko rakh lo, aur mujhe file ka original name hai ( file.originalname) ushi naam se de do , ishi wajah se hum usko (req.files?.avatar[0]?.path) yaha pe le paye