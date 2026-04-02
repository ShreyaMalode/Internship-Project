import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected");
  } catch (error) {
    console.error("database not connected");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;
