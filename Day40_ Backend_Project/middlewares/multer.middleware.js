// for now we are using diskstorage and not memory storage 

// humne storage naam se method banaya , isko hum as a middleware hi use karenge 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // req - jo user se request aa rahi hai, ek file access aur mil jati hai jiske andar sari files mil jati hai , req ke andar body me jo bhi json data aayega  wo mil jata hai , agar file bhi aa rahi hai isliye hi multer use hota hai  , kyuki req body ke andar json data etc configure kar diya humne but file configure nahi hoti hai isliye multer ya express ka file upload hai use hota hai 
        // cb - callback hai 

        // file - ye file multer ke paas hi hota hai 
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      console.log(file); // study result of this 
      
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname) 
      //originalname -jo bhi user ne upload kiya tha wahi wala original name bata do , achi practice nahi hai kyuki user ke paas same naam ki 5 file ho to overwrite ho jayegi , but file itne kam time ke liye rahegi file server pe, ki thode der ke liye rahegi file phir cloudinary se usko upload kar denge phir delete kar denge file ko  
    }
  })
  
  export const upload = multer({ 
      // storage: storage
      // OR 
      storage,   // as per ES6 
  })

  