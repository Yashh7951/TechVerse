import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    profilePicture: {
      type: 'string',
      default:
        'https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
