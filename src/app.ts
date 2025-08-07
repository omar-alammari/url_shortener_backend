import Koa from "koa";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import bodyParser from "koa-bodyparser";
import router from "./routes/index";

const app = new Koa();

// middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

export default app;
