import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { clerkClient, clerkMiddleware, getAuth, requireAuth } from "@clerk/express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON bodies
app.use(express.json());
app.use(clerkMiddleware())
app.use(express.urlencoded({ extended: true }));

//routes 
app.use("/api/canvas", requireAuth(), async (req, res) => {
    const { userId } = getAuth(req);
    if (!userId) {
        return res.status(401).json({ error: "Unauthorized: userId not found" });
    }
    const user = await clerkClient.users.getUser(userId);
    res.json({ user });
});


const startServer = async () => {
    try {
        await connectdb();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        process.on("uncaughtException", (err) => {
            console.error("Uncaught Exception:", err);
        });
        process.on("unhandledRejection", (reason, promise) => {
            console.error(
                "Unhandled Rejection at:",
                promise,
                "reason:",
                reason
            );
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};
startServer();

export default app;
