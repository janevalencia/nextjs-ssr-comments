/**
 * API route: api/comments
 * - GET
 * - POST
 */
 import type { NextApiRequest, NextApiResponse } from 'next'
 import { dbConnect } from "../../../utils/connection";
 import { ResponseFunctions } from '../../../interfaces';
 import Comment from '../../../models/Comment';
 
 const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   // Identify the request method.
   const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
 
   // Exception handler.
   const exception = (error: Error) => res.status(400).json({ error });
 
   // Handle response.
   const handleResponse: ResponseFunctions = {
         // GET /comments/: Fetch all comments.
         GET: async (req: NextApiRequest, res: NextApiResponse) => {
             // Connect to database.
             await dbConnect();
 
             // Fetch all comments objects.
             const comments = await Comment.find({}).populate([
              'user', 
              { 
              path: 'replies',
              populate: {
                path: 'user',
                model: 'User'
              }}
            ]).catch(exception);
             
             // Return all comments upon status 200.
             res.status(200).json(comments);
         },
 
         // POST /comments/: Create new comment.
         POST: async (req: NextApiRequest, res: NextApiResponse) => {
             // Connect to database.
             await dbConnect();
 
             // Create a Comment object based on body request.
             const comment = await Comment.create(req.body).catch(exception);
 
             // Return newly created comment object upon status 200.
             res.status(200).json({
                 "message" : "Successfully created a new comment.",
                 "result" : comment
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