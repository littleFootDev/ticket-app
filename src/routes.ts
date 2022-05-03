import Router from 'koa-router';
import { Auth } from './controllers/auth/auth';
import { Ticket } from './controllers/ticket/ticket';
import { User } from './controllers/user/user';
import { verifyToken } from './helpers/auth';

export function registerRoutes() {
    const router = new Router()
    
    // AUTH ROUTES
    router.post('/register', Auth.prototype.create)
    router.post('/login', Auth.prototype.login)

    // TICKET ROUTES
    router.get('/tickets', verifyToken, Ticket.prototype.getAllTickets)
    router.post('/tickets/add', verifyToken, Ticket.prototype.addTicket)
    router.put('/tickets/:id', verifyToken, Ticket.prototype.editTicket)
    router.put('/tickets/close-tickets/:id', verifyToken, Ticket.prototype.closeTicket)
    router.delete('/tickets/:id', verifyToken, Ticket.prototype.deleteTicket)

    // USER ROUTES 
    router.get('/users', verifyToken, User.prototype.getUser)

    return router;
}