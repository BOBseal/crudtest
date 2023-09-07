import { Schema , model } from "mongoose";

const UserSchema =  new Schema({
    address:{
      type: String,
      required:[true ,"Address Must be there for registration"],
      default: "0x0426E6B29Ec78c8d43502EC8DECbDb76551e7D60"
    },
    userName:{
        type:String,
        required:[false],
        default: "BOBA"
    },
})

export const User = model('user' , UserSchema)