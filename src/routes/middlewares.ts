// middlewares
import { RouterContext } from "@koa/router";
import { Next } from "koa";
import httpError from "http-errors";
import { validateToken } from "../config/jwt";

export const requiredAuthHandler = async (ctx: RouterContext, nxt: Next) => {
  const headers = ctx.request.headers.authorization;
  if (!headers) {
    throw httpError.Unauthorized("Please provide a token");
  }
  const token = headers.split(" ")[1];
  const tokenPayload = validateToken(token);
  // const tokenPayload = validateJWT(token);
  ctx.state.user_id = tokenPayload.user_id;
  await nxt();
};

// migrations
