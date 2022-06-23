import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../../util/db/mongodb"
import { ResponseFuncs } from "../../../util/models/types"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error })

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { CV } = await connectToDatabase() 
      res.json(await CV.find({}).catch(catcher))
    },
    // RESPONSE POST REQUESTS
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { CV } = await connectToDatabase() 
      const resp= await CV.create(req.body).catch(catcher)
      res.json(resp)
    },
  }
  
  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}