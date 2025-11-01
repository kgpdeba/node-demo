import mongoose from "mongoose";

const url = "mongodb+srv://debaaot:debaaot@cluster0.okqhkkb.mongodb.net/";

export async function dbConnect() {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Not connected:", error);
  }
}
