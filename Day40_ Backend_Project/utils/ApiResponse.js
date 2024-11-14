class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }
// ApiResponse bhejne ke liye ek class bana rakhi hai jo data ish tarike se bhejti hai 
// so ish class ka object bana ke ishi tarah se bhenje ge 