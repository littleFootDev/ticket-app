import Router from 'koa-router';
import { Auth } from './controllers/auth/auth';
import { Ticket } from './controllers/ticket/ticket';

export function registerRoutes() {
    const router = new Router()
    
    //Auth
    router.post('/register', Auth.prototype.create)
    router.post('/login', Auth.prototype.login)


    //Ticket
    router.post('/tickets/add', Ticket.prototype.addTicket)
    router.get('/tickets', Ticket.prototype.getAllTickets)
    router.get('/tickets/:id', Ticket.prototype.getOneTicket)
    return router;
}