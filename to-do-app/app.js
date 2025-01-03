import express from "express"
import connectDB from "../to-do-app/dbConfig/db.js"
import bodyParser from "body-parser";
import taskRoutes from "../to-do-app/routes/task.js"
import authRoutes from "../to-do-app/routes/auth.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server Started at", PORT);
    });
}).catch(err => {
    console.error('Failed to connect to the database', err);
    process.exit(1);
})