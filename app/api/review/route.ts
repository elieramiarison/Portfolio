import { Review } from "@/lib/models/review";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
// import { connectDB } from "@/lib/mongodb";

export const POST = async (req: NextRequest) => {
    try {
        await connectDB()
        const { name, statut, message, reaction } = await req.json()
        if (!name || !statut || !message) {
            return NextResponse.json({ message: "Touts les champs sont obligatoire" }, { status: 400 })
        }
        const newReview = new Review({ name, statut, message, reaction })
        const reviewSave = await newReview.save()
        return NextResponse.json(reviewSave, { status: 201 })
    } catch (error: unknown) {
        console.error("Erreur serveur:", error);
        return NextResponse.json(
            { message: "Erreur serveur" },
            { status: 500 }
        );
    }
}

export const GET = async () => {
    try {
        await connectDB()
        const res = await Review.find()
        return NextResponse.json(res, { status: 200 })
    } catch (error: unknown) {
        console.error("Erreur serveur:", error);
        return NextResponse.json(
            { message: "Erreur serveur" },
            { status: 500 }
        );
    }
}