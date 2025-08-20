import { Router } from "express";
import { ShapeModel } from "../models/Shape.js";
const drawingRouter = Router();

drawingRouter.get("/", (req, res) => {
  res.send("Drawing API is working");
});//to get existing shapes

// to save shapes
drawingRouter.post("/save", async(req, res) => {
    const shape = req.body;
    const userId = req.auth?.userId;
    if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    await ShapeModel.updateOne(
        { userId},
        { $push: {shapes: shape } },
        { upsert: true }
    )
})

// update shapes 
drawingRouter.put("/update", (req, res) => {

})