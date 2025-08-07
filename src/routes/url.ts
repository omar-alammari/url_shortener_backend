import Router from "@koa/router";
import {
  createShortURL,
  updateShortURL,
  getURLs,
  deleteURL,
} from "../services/urls";

const urlRouter = new Router();

urlRouter
  .get("/", async (ctx) => {
    ctx.response.body = await getURLs(
      ctx.state.user_id,
      Number(ctx.query.limit),
      Number(ctx.query.offset)
    );
  })
  .post("/", async (ctx) => {
    ctx.response.body = await createShortURL(
      ctx.request.body as any,
      ctx.state.user_id
    );
  })
  .put("/:id", async (ctx) => {
    ctx.response.body = await updateShortURL(
      ctx.params.id,
      ctx.request.body as any,
      ctx.state.user_id
    );
  })
  .delete("/:id", async (ctx) => {
    ctx.response.body = await deleteURL(ctx.params.id, ctx.state.user_id);
  });

export default urlRouter;

// urlRouter.get("/", async (ctx) => {
//   ctx.response.body = await getURLs(
//     ctx.state.user_id,
//     Number(ctx.query.limit),
//     Number(ctx.query.offset)
//   );
// });

// urlRouter.post("/create", async (ctx) => {
//   ctx.response.body = await createShortURL(
//     ctx.request.body as any,
//     ctx.state.user_id
//   );
// });

// urlRouter.put("/update", async (ctx) => {
//   ctx.response.body = await updateShortURL(
//     ctx.params.id,
//     ctx.request.body as any,
//     ctx.state.user_id
//   );
// });

// urlRouter.delete("/delete", async (ctx) => {
//   ctx.response.body = await deleteURL(ctx.params.id, ctx.state.user_id);
// });

// export default urlRouter;
