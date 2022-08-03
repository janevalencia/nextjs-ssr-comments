import mongoose from "mongoose";

// Get database URL from .env file.
const { DB_SERVER_URL } = process.env;

// Connect to database server.
export const connect = async () => {
  const conn = await mongoose
    .connect( DB_SERVER_URL as string )
    .catch( e => console.log(e) );
  
  console.log("Connection established.");
}