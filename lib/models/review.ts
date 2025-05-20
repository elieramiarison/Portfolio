import mongoose, { Schema } from "mongoose"
import type { ReviewType } from "@/app/types/review";

const reviewSchema = new Schema<ReviewType>({
    name: { type: String, required: true },
    statut: { type: String, required: true },
    message: { type: String, required: true },
    reaction: { type: String, default: 'like' }
})

export const Review = mongoose.models.Review || mongoose.model<ReviewType>("Review", reviewSchema)