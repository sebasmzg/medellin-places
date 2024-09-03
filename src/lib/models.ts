import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  img?: string;
  isAdmin?: boolean;
  password?: string;
}

export interface IPost extends Document {
  title: string;
  description: string;
  img?: string;
  userId: string;
  slug: string;
  createdAt: Date;
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
  password:{
    type:String,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const postSchema: Schema<IPost> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

export const User: Model<IUser> = mongoose.models?.User || mongoose.model<IUser>('User', userSchema);
export const Post: Model<IPost> = mongoose.models?.Post || mongoose.model<IPost>('Post', postSchema);
