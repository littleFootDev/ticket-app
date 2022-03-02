import mongoose from "mongoose";
import { hash, compare } from "bcryptjs";
import { IUser } from "../../interface/user.interface";

const userSchema : mongoose.Schema = new mongoose.Schema({
    username : {type: String},
    password : {type: String},
    role : {type: String},
    date: {type: Date, default: Date.now()},

});

userSchema.pre("save", async function(this : IUser, next) {
    const hashedPasword = await hash(this.password, 10);
    this.password = hashedPasword;
    
    next();
});
userSchema.methods.comparePassword = function(password : string) : Promise<boolean> {
    const hashedPasword : string = (this as IUser).password;
    return compare(password, hashedPasword);
};
export {userSchema};