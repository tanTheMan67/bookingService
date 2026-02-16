const {Booking}=require('../models/index');
const {StatusCodes}=require('http-status-codes');
const {ValidationError,ServiceError,AppError}=require('../utils/errors/index');
class BookingRepository{
  
async create(data){
    try{

    }catch(err){
  if(err.name==='SequelizeValidationError'){
    throw new ValidationError(err);
  }
  throw new AppError('Repository Error','cannot create Booking','Unexpected issue',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
}
module.exports=BookingRepository;