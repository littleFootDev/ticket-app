import mongoose from "mongoose";

export interface ITicket extends mongoose.Document {
    user : string;
    ticketIt: string;
    fullName: string;
    email : string;
    status: string,
    departement: string;
    priority: string;
    subject: string;
    description: string;
    created: Date;
    closed?: boolean;
    duDate?:Date; 
}