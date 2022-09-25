/**
 * API route: api/replies/parent/[parent_id]
 * - GET
 */
 import type { NextApiRequest, NextApiResponse } from 'next'
 import { dbConnect } from "../../../../utils/connection";
 import { ResponseFunctions } from '../../../../interfaces';
 import User from '../../../../models/User';
 import Comment from '../../../../models/Comment';
 import Reply from '../../../../models/Reply';
 
 const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   // Identify the request method.
   const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;

    // Fetch parent_ID parameter from the request.
    const id: string = req.query.id as string;
 
   // Exception handler.
   const exception = (error: Error) => res.status(400).json({ error });
 
   // Handle response.
   const handleResponse: ResponseFunctions = {
         // GET /replies/parent/[parent_id]: Fetch all replies of a particular parent_id.
         GET: async (req: NextApiRequest, res: NextApiResponse) => {
             // Connect to database.
             await dbConnect();

             // Fetch all users object.
             const users = await User.find({}).catch(exception);
             
             // Fetch all comments objects.
             const comments = await Comment.find({}).populate('user').catch(exception);

             // Fetch all parent's replies objects.
             const parentReplies = await Reply.find({ parent: id }).populate('user').catch(exception);
             
             // Return all replies upon status 200.
             res.status(200).json(parentReplies);
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