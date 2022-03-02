import mongoose from "mongoose";
import { IUser } from "../../interface/user.interface";
import {userSchema} from "./User.schema";

const userModel: mongoose.Model<IUser> = new mongoose.Model('User', userSchema);

export {userModel as UserModel};