class ApiError extends Error {
    constructor(
        statusCode,
        message= "something went wrong",
        errors = [],
        stack = ""
    ){
        // we'll overwrite this 
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false //kyuki success code hahi jayega, kyuki api error ko hum handle kar rahe hai , api response ko nahi handle kar rahe 
        this.errors = errors


        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}


// export default ApiError

export {ApiError}