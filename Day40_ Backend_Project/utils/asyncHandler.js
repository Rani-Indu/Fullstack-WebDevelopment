// utils contains methods/ code  which are repetitive

// const asyncHandler = (err, req, res, next) => {}
    
    
    
// HOF/ HOM
// Functions js ke andar parameters ke tarah pass ho sakte hai, aur hum caahe to function ki value ko return bhi kar sakte hai
// asyncHandler - acts like HOF
// HOF - wo functions jo function ko as a parameter bhi accept kar sakte hai ya phir usko return kar sakte hai 

// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}}
    // const asyncHandler = (func) => () => {} //remove curly braces , one and same thing
    
    
    
        
        // try catch method
const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next) // jo function liya hai usko execute karna hai 
    } catch (error) {
            res.status(err.code || 500).json({
                success: false,
                message: err.message
    })

    }
} 

//  fn or requestHandler - name of function 
// .then .catch method

// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next))
//         .catch((err) => next(err))
//     }
// }





export default asyncHandler