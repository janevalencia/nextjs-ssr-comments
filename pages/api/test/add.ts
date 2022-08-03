// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from "../../../utils/connection";
import Test from "../../../models/TestModel";

// Declare NextAPIResponse type.
type Test = {
  uuid: number,
  text: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Test>
) {
    // Run connection to db.
    await dbConnect();

    // Create a test object based on the request body.
    const test = await Test.create(req.body);

    // Return response.
    res.status(200).json(test);
}