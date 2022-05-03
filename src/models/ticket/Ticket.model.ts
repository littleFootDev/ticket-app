import mongoose from "mongoose";
import {ITicket} from "../../interface/ticket.interface";
import {ticketSchema} from './Ticket.Schema';


const ticketModel: mongoose.Model<ITicket> = mongoose.model("Ticket", ticketSchema);

export {ticketModel as TicketModel};