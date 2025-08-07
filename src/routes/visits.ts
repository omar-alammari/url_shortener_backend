import Router from "@koa/router";
import { getLastVisit, getVisitByURL } from "../services/visits";

const visitsRouter = new Router();

visitsRouter
  .get("/", async (ctx) => {
    ctx.response.body = await getLastVisit(
      ctx.state.user_id,
      Number(ctx.query.limit),
      Number(ctx.query.offset)
     );
  })

  .get("/:id", async (ctx) => {
    ctx.response.body = await getVisitByURL(
      ctx.params.id,
      ctx.state.user_id,
      Number(ctx.query.limit),
      Number(ctx.query.offset)
    );
  });

export default visitsRouter;
