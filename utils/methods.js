import mongoose from "mongoose";
import AppError from "../AppError.js";


const isMongoDbId = (id) => {
    const isValid = mongoose.isValidObjectId(id)
    if (!isValid) throw new AppError('Invalid Id', 400)
}

export { isMongoDbId }