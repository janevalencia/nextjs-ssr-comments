/**
 * API route: api/replies
 * - GET
 * - POST
 */
 import type { NextApiRequest, NextApiResponse } from 'next'
 import { dbConnect } from "../../../utils/connection";
 import { ResponseFunctions } from '../../../interfaces';
 import Reply from '../../../models/Reply';
 import Comment from '../../../models/Comment';
 
 const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   // Identify the request method.
   const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
 
   // Exception handler.
   const exception = (error: Error) => res.status(400).json({ error });
 
   // Handle response.
   const handleResponse: ResponseFunctions = {
         // GET /replies/: Fetch all replies.
         GET: async (req: NextApiRequest, res: NextApiResponse) => {
             // Connect to database.
             await dbConnect();
 
             // Fetch all replies objects.
             const replies = await Reply.find({}).populate('user').catch(exception);
             
             // Return all replies upon status 200.
             res.status(200).json(replies);
         },
 
         // POST /replies/: Create new reply.
         POST: async (req: NextApiRequest, res: NextApiResponse) => {
             // Connect to database.
             await dbConnect();
 
             // Create a Reply object based on body request.
             const reply = await Reply.create(req.body).catch(exception);

             // Update the parent_comment's replies array.
             const comment = await Comment.findOneAndUpdate(
                { _id: req.body.parent },
                { $push: { replies: reply }},
                { new: true }
             ).catch(exception);
 
             // Return newly created reply object upon status 200.
             res.status(200).json({
                 "message" : "Successfully created a new reply.",
                 "newReply" : reply,
                 "updatedComment" : comment
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