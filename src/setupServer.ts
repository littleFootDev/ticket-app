import Koa from "koa";
import koaCors from "koa2-cors";
import bodyParser from "koa-bodyparser";
import { registerRoutes } from "./routes";

async function serverSetup() {
  const server: Koa = new Koa();
  middlewares(server);
  await startServer(server);
}
function middlewares(server : Koa) {
    server.use(bodyParser());
    server.use(koaCors());


    const routes = registerRoutes().routes();

    server.use(routes);
}
async function startServer(server: Koa) {
  try {
    const port = 8080;
    const serverStarted: Promise<void> = new Promise((resolve) => {
      server.listen(port, resolve);
    });
    await serverStarted;
    console.log(`Serveur is running on port ${port}`);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export {serverSetup};