import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
    const MONGODB_URL = process.env.MONGODB_URL;

    if (!MONGODB_URL) {
        throw new Error("MONGODB_URL manquant dans .env.local");
    }

    if (isConnected) {
        console.log("Déjà connecté à MongoDB");
        return;
    }

    try {
        await mongoose.connect(MONGODB_URL);
        isConnected = true;
        console.log("Connexion réussie à MongoDB");
    } catch (error) {
        console.error("Connexion échouée à MongoDB", error);
        throw new Error("Erreur de connexion à MongoDB");
    }
}

// import mongoose from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL!;
// if (!MONGODB_URL) {
//     throw new Error("Please define the MONGODB_URL environment variable");
// }

// interface MongooseCache {
//     conn: typeof mongoose | null;
//     promise: Promise<typeof mongoose> | null;
// }

// // On ajoute dynamiquement une propriété à globalThis avec typage
// const globalWithMongoose = globalThis as typeof globalThis & {
//     mongooseCache?: MongooseCache;
// };

// if (!globalWithMongoose.mongooseCache) {
//     globalWithMongoose.mongooseCache = { conn: null, promise: null };
// }

// const cached = globalWithMongoose.mongooseCache;

// async function connectDB() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         cached.promise = mongoose.connect(MONGODB_URL, {
//             dbName: "portfolio",
//         }).then((mongoose) => mongoose);
//     }

//     cached.conn = await cached.promise;
//     return cached.conn;
// }

// export default connectDB;