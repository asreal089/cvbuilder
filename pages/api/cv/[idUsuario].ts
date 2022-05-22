import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../../util/db/mongodb"
import { ResponseFuncs } from "../../../util/models/types"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs
    const { CV } = await connectToDatabase();
    const catcher = (error: Error) => res.status(400).json({ error })
    const {
        query: { idUsuario },
    } = req
    const handleCase: ResponseFuncs = {
        // RESPONSE FOR GET REQUESTS
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
          const { CV } = await connectToDatabase() 
          res.json(await CV.find({ id_usuario: { $eq: idUsuario }}).catch(catcher))
        },
        // RESPONSE POST REQUESTS
        PUT: async (req: NextApiRequest, res: NextApiResponse) => {
          const { CV } = await connectToDatabase() 
          const response = await CV.findOneAndUpdate({ id_usuario: { $eq: idUsuario } }, req.body).catch(catcher)
          res.json(response)
        },
      }
    const response = handleCase[method]
    if (response) response(req, res)
    else res.status(400).json({ error: "No Response for This Request" })
}