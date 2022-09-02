/**
 * API route: /users/[username]
 * - GET
 * - PUT
 * - DELETE
 */
 import type { NextApiRequest, NextApiResponse } from 'next'
 import { dbConnect } from "../../../utils/connection";
 import { ResponseFunctions } from '../../../interfaces';
 import User from '../../../models/User';

 const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Identify the request method.
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  
    // Fetch username parameter from the request.
    const userName: string = req.query.username as string

    // Exception handler.
    const exception = (error: Error) => res.status(400).json({ error });
  
    const handleCase: ResponseFunctions = {
      // GET /users/[username]: Fetch a single user by username
      GET: async (req: NextApiRequest, res: NextApiResponse) => {
        // Connect to database.
        await dbConnect();

        // Fetch a User by username
        const user = await User.findOne({ username: userName }).exec().catch(exception);

        // Return the queried user upon status 200.
        res.status(200).json(user);
      },
      
      // PUT /users/[username]: Update a property of a single user.
      PUT: async (req: NextApiRequest, res: NextApiResponse) => {
        // Connect to database.
        await dbConnect();

        // Update the user information based on the request body.
        // More info about findOneAndUpdate: https://mongoosejs.com/docs/tutorials/findoneandupdate.html
        const update = await User.findOneAndUpdate({ username: userName }, req.body, { new: true }).catch(exception);

        // Return response upon successfully updating a user.
        res.status(200).json({
          "message" : `Successfully updated ${userName}`,
          "result" : update
        });
      },
      
      // DELETE /users/[username]: Delete a single user.
      DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
        // Connect to database.
        await dbConnect();

        // Fetch a User by username
        const del = await User.findOneAndUpdate({ username: userName }).catch(exception);

        // Return response upon successfully deleting a user.
        res.status(200).json({
          "message" : `Successfully deleted ${userName}`
        });
      },
    }
  
    // Return response if request method is exist/valid, otherwise return 400.
    const response = handleCase[method]
    if (response) { 
      response(req, res) 
    } else  {
      res.status(400).json({ error: "No response found, verify request method." })
    }
  }
  
  export default handler;