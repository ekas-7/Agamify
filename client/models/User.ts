// client/models/User.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRepository {
  githubId: number;
  name: string;
  description?: string;
  htmlUrl: string;
  cloneUrl: string;
  isPrivate: boolean;
}

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  githubId: string;
  githubUsername: string;
  avatarUrl?: string;
  repositories: IRepository[]; // All GitHub repositories (for import popup)
  importedRepositories: IRepository[]; // Only imported repositories (for dashboard)
  githubAccessToken?: string;
}

const RepositorySchema = new Schema<IRepository>({
  githubId: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String },
  htmlUrl: { type: String, required: true },
  cloneUrl: { type: String, required: true },
  isPrivate: { type: Boolean, required: true },
});

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String },
  email: { type: String, unique: true, sparse: true },
  image: { type: String },
  githubId: { type: String, required: true, unique: true },
  githubUsername: { type: String, required: true },
  avatarUrl: { type: String },
  repositories: { type: [RepositorySchema], default: [] }, // All GitHub repositories
  importedRepositories: { type: [RepositorySchema], default: [] }, // Only imported ones
  githubAccessToken: { type: String },
});

export const User: Model<IUser> =
  (mongoose.models && mongoose.models.User) || mongoose.model<IUser>("User", UserSchema);
