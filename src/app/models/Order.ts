/* eslint-disable @typescript-eslint/quotes */
import { model, Schema } from "mongoose";

export const Order = model(
    "Order",
    new Schema({
        table: { type: String, required: true },
        // ENUM É UMA PROPRIEDADE DO MONGO ONDE ELE SÓ ACEITA SOMENTE OS VALORES DEFINIDOS DENTRO DELES.
        status: {
            type: String,
            enum: ["WAITING", "IN_PRODUCTION", "DONE"],
            default: "WAITING",
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        products: {
            type: [
                {
                    product: {
                        type: Schema.Types.ObjectId,
                        required: true,
                        ref: 'Product',
                    },
                    quantity: {
                        type: Number,
                        default: 1,
                    },
                },
            ],
            required: true,
        },
    })
);
