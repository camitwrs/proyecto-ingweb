import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import petRoutes from "./routes/pets.routes.js";

const app = express();

// middlewares
app.use(cors({
  origin: "http://localhost:5173",
})); // por los dominios diferentes, politicas de navegador
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

app.use("/api", authRoutes);
app.use("/api", petRoutes);

export default app;
