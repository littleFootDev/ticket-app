import Router from 'koa-router';
import { Auth } from './controllers/auth/auth';

export function registerRoutes() {
    const router = new Router()
    

    router.post('/register', Auth.prototype.create)

    return router;
}