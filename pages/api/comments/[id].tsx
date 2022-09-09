/**
 * API route: api/comments/[id]
 * - GET
 * - PUT
 * - DELETE
 */
 import type { NextApiRequest, NextApiResponse } from 'next'
 import { dbConnect } from "../../../utils/connection";
 import { ResponseFunctions } from '../../../interfaces';
 import Comment from '../../../models/Comment';

 const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Identify the request method.
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  
    // Fetch ID parameter from the request.
    const id: string = req.query.id as string;

    // Exception handler.
    const exception = (error: Error) => res.status(400).json({ error });
  
    const handleCase: ResponseFunctions = {
      // GET /comments/[id]: Fetch a single comment by ID.
      GET: async (req: NextApiRequest, res: NextApiResponse) => {
        // Connect to database.
        await dbConnect();

        // Fetch a Comment by username
        const comment = await Comment.findById(id).populate('user').catch(exception);

        // Return the queried user upon status 200.
        res.status(200).json(comment);
      },
      
      // PUT /comments/[id]: Update property(s) of a single comment.
      PUT: async (req: NextApiRequest, res: NextApiResponse) => {
        // Connect to database.
        await dbConnect();

        // Update the comment information based on the request body.
        const update = await Comment.findByIdAndUpdate(id, req.body, { new: true }).catch(exception);

        // Return response upon successfully updating a user.
        res.status(200).json({
          "message" : `Successfully updated ${id}`,
          "result" : update
        });
      },
      
      // DELETE /comments/[id]: Delete a single comment.
      DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
        // Connect to database.
        await dbConnect();

        // Delete a comment by ID.
        const del = await Comment.findByIdAndDelete(id).catch(exception);

        // Return response upon successfully deleting a user.
        res.status(200).json({
          "message" : `Successfully deleted ${id}`
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