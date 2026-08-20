import mongoose, { type Mongoose } from "mongoose";

type MongooseCache = {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const mongooseCache = globalWithMongoose.mongooseCache ?? {
  connection: null,
  promise: null,
};

globalWithMongoose.mongooseCache = mongooseCache;

export class MongoConfigurationError extends Error {
  constructor() {
    super("MONGODB_URI is not configured.");
    this.name = "MongoConfigurationError";
  }
}

export function isMongoConfigured(): boolean {
  return Boolean(process.env.MONGODB_URI);
}

export function getMongoConnectionState(): number {
  return mongoose.connection.readyState;
}

export async function connectToDatabase(): Promise<Mongoose> {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new MongoConfigurationError();
  }

  if (mongooseCache.connection?.connection.readyState === 1) {
    return mongooseCache.connection;
  }

  if (!mongooseCache.promise) {
    mongooseCache.promise = mongoose.connect(mongoUri, { bufferCommands: false }).catch(() => {
      mongooseCache.promise = null;
      throw new Error("MongoDB connection failed.");
    });
  }

  mongooseCache.connection = await mongooseCache.promise;

  if (mongooseCache.connection.connection.readyState !== 1) {
    throw new Error("MongoDB connection is not ready.");
  }

  return mongooseCache.connection;
}
