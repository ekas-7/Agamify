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
  isBetaTester: boolean;
  betaSignupDate?: Date;
  betaNotifications: boolean;
}

// New interface for storing emails before GitHub authentication
export interface IPreSignupEmail extends Document {
  email: string;
  submittedAt: Date;
  converted: boolean; // Whether they completed GitHub signup
  convertedAt?: Date;
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
  isBetaTester: { type: Boolean, default: false },
  betaSignupDate: { type: Date },
  betaNotifications: { type: Boolean, default: true },
});

const PreSignupEmailSchema: Schema<IPreSignupEmail> = new Schema({
  email: { type: String, required: true, unique: true },
  submittedAt: { type: Date, default: Date.now },
  converted: { type: Boolean, default: false },
  convertedAt: { type: Date },
});

export const User: Model<IUser> =
  (mongoose.models && mongoose.models.User) || mongoose.model<IUser>("User", UserSchema);
export const PreSignupEmail: Model<IPreSignupEmail> =
  (mongoose.models && mongoose.models.PreSignupEmail) || 
  mongoose.model<IPreSignupEmail>("PreSignupEmail", PreSignupEmailSchema);
