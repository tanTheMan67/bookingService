const {StatusCodes}=require('http-status-codes')
class ValidationError extends Error{
constructor(message,explanation,statusCode = StatusCodes.INTERNAL_SERVER_ERROR){
    super();
    this.message=message;
    this.explanation=explanation;
    this.statusCode=statusCode;
}
} 
module.exports=ValidationError;