import mongoose from "mongoose";
import {ITicket} from "../../interface/ticket.interface";


const ticketSchema: mongoose.Schema = new mongoose.Schema({
    user: { type: String},
    ticketId: { type: String},
    fullName: { type: String},
    email: { type: String},
    status: { 
        type: String,
        default: 'Open'
    },
    departement: { type: String},
    priority: { type: String},
    subject: { type: String},
    description: { type: String},
    created: {
        type: Date,
        default: Date.now()
    },
    closed: {
        type: Boolean,
        default: false
    },
    duDate: {type: Date}
});

export {ticketSchema};