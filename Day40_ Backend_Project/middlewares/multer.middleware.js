// for now we are using diskstorage and not memory storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // req - jo user se request aa rahi hai, ek file access aur mil jati hai jiske andar sari files mil jati hai , req ke andar body me jo bhi json data aayega  wo mil jata hai , agar file bhi aa rahi hai isliye hi multer use hota hai  , kyuki req body ke andar json data etc configure kar diya humne but file configure nahi hoti hai isliye multer ya express ka file upload hai use hota hai 
        // cb - callback hai 

        // file - ye file multer ke paas hi hota hai 
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })