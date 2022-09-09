/**
 * API route: api/users/
 * - GET
 * - POST
 */
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from "../../../utils/connection";
import { ResponseFunctions } from '../../../interfaces';
import User from '../../../models/User';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Identify the request method.
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;

  // Exception handler.
  const exception = (error: Error) => res.status(400).json({ error });

  // Handle response.
  const handleResponse: ResponseFunctions = {
        // GET /users/: Fetch all users.
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            // Connect to database.
            await dbConnect();

            // Fetch all users data from database.
            const users = await User.find({}).catch(exception);
            
            // Return all users upon status 200.
            res.status(200).json(users);
        },

        // POST /users/: Create new user.
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            // Connect to database.
            await dbConnect();

            // Create a User object based on the request body.
            const user = await User.create(req.body).catch(exception)

            // Return newly created new user object upon status 200.
            res.status(200).json({
                "message" : "Successfully created a new user.",
                "result" : user
            });
        },
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