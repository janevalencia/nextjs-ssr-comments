import mongoose, { connect } from "mongoose";

// Get database URL from .env file.
const { DB_SERVER_URL } = process.env;

// Connect to database server.
export const dbConnect = async () => {
  const conn = await connect( DB_SERVER_URL! )
    .catch( e => console.log(e) );
  
  console.log("Connection established.");
}