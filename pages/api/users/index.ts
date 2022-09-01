/**
 * API GET: All Users
 */
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from "../../../utils/connection";
import { ResponseFunctions } from '../../../interfaces';
import User from '../../../models/User';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Identify the request method.
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;

  // Handle response. Note: For this project, we won't be creating POST request for User object.
  const handleResponse: ResponseFunctions = {
    // GET: All Users
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
        // Connect to database.
        await dbConnect();

        // Fetch all users data from database.
        const users = await User.find({}).catch((error: Error) => res.status(400).json({ error }));
        
        // Return response upon 200 status.
        res.status(200).json(users);
    }
  }

  // Return response if request method is exist/valid, otherwise return 400.
  const response = handleResponse[method]
  if (response) { 
    response(req, res) 
  } else  {
    res.status(400).json({ error: "No response found, verify request method." })
  }
}

export default handler;