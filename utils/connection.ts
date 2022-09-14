import { connect } from "mongoose";

// Get database URL from .env file.
const { DB_SERVER_URL } = process.env;

// Verify MongoDB URI exists.
if (!DB_SERVER_URL) {
  throw new Error('Define the DB_SERVER_URL environmental variable');
}

// Connect to database server.
export const dbConnect = async () => {
  const conn = await connect( DB_SERVER_URL! )
    .catch( e => console.log(e) );
  
  console.log("Connection established.");
}