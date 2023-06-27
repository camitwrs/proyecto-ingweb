import app from "./app.js";
import { connectDB } from "./database.js";

// conectar a bd
connectDB();
// arrancar el servidor
app.listen(3000);
console.log("servidor en puerto:", 3000);
