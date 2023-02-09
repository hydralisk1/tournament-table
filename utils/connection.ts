import mongoose, { Model } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

export const connect = async () => {
  const conn = await mongoose
                      .connect(MONGODB_URI as string)
                      .catch(err => console.error(err))

  const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
  })

  const User = mongoose.models.User || mongoose.model('User', UserSchema)

  return { conn, User }
}
