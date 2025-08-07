import jwt from "jsonwebtoken";
import httpErrors from "http-errors";
import { RequestBody } from "../types";

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

export const generateToken = (payload: RequestBody) =>
  jwt.sign(payload, JWT_PRIVATE_KEY, { expiresIn: "365d" });

export const validateToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_PRIVATE_KEY) as RequestBody;
    // const content = jwt.verify(token, JWT_PRIVATE_KEY) as RequestBody;
    // return content;
  } catch {
    throw new httpErrors.Unauthorized("Please provide a valid token");
  }
};
