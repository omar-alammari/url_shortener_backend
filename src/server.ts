import "dotenv/config";
import { onDatabaseConnect } from "./config/knex";
import app from "./app";

const port = process.env.PORT;

const main = async () => {
  await onDatabaseConnect();
  app.listen(port, () => console.log(`koa is live with port ${port}`));
};

main();
