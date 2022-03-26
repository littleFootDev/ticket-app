import mongoose from "mongoose";
import { versions } from "process";
import {ITicket} from "../../interface/ticket.interface";
import {ticketSchema} from './Ticket.Schema';


const ticketModel: mongoose.Model<ITicket> = new mongoose.Model("Ticket", ticketSchema);

export {ticketModel as TIcketModel};