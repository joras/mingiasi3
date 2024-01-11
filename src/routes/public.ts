import express from "express";

export const publicRoutes = express.Router();

publicRoutes.get("/hello", (_req, res) => {
  res.send("Hi!");
});
