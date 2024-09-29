import "../config/envConfig";
import { connect } from "mongoose";

const connectToDb = async () => {
  const connectionUrl = process.env.DATABASE_URL!;

  connect(connectionUrl)
    .then(() => console.log("Successfully connected to the database"))
    .catch((err) => console.error(err));
};

export default connectToDb;
