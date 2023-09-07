import fs from "fs"
import { StatusCodes } from "http-status-codes"

export const checkFileSize = (req, res, next) => {
     const fileSize = 2 * 1024 * 1024 // 2MB
     const actualFileSize = req.file.size
     
     if(!actualFileSize) {
         res.status(StatusCodes.BAD_REQUEST).json({ msg: "no image file was pass in, you have to pass an image file tobe able accessing size property" })
        return;
     }

     if(actualFileSize > fileSize) {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "file size cannot be above 2mb" })
        return;
     }

     console.log(`actualFileSize: ${actualFileSize}, fileSize: ${fileSize}`)
     
     next()
}