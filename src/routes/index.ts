import Router from "@koa/router";
import authRouter from "./auth";
import urlRouter from "./url";
import visitsRouter from "./visits";
import { requiredAuthHandler } from "./middlewares";
import { resolveURL } from "../services/urls";

const router = new Router();

router.use("/auth", authRouter.routes(), authRouter.allowedMethods());

router.use(
  "/urls",
  requiredAuthHandler,
  urlRouter.routes(),
  urlRouter.allowedMethods()
);

router.use(
  "/visits",
  requiredAuthHandler,
  visitsRouter.routes(),
  visitsRouter.allowedMethods()
);

router.get("/:id", async (ctx) => {
  const url = await resolveURL(ctx.params.id, ctx.request.ip);
  ctx.redirect(url);
});

export default router;
