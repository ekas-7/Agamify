// client/lib/mongoose.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL || "mongodb://localhost:27017/agamify";

if (!MONGODB_URI) {
  throw new Error("Please define the DATABASE_URL environment variable");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: MongooseCache = (global as unknown as { mongoose?: MongooseCache }).mongoose as MongooseCache;

if (!cached) {
  cached = (globalThis as unknown as { mongoose?: MongooseCache }).mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
