import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose, { Error } from "mongoose";
import { router } from "./routes";

dotenv.config();

mongoose.set("strictQuery", true);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

console.log("options", process.env.MONGODB);

mongoose
    .connect(process.env.MONGODB || "")
    .then(() => {
        console.log("Mongodb Connection!");

        const app = express();

        app.use(cors());
        app.use(express.json());

        app.use(router);
        app.listen(process.env.PORT, () => {
            console.log(
                `listening on port http://localhost:${process.env.PORT}`
            );
        });
    })
    .catch((error: Error) => {
        console.log("Mongodb Error!");

        return error.message;
    });
