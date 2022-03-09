import { databaseSetup } from "./setupDatabase";
import { serverSetup } from "./setupServer";

async function init() {
  await serverSetup();
  await databaseSetup();
}
init();
