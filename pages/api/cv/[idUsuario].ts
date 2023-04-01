import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/db/mongodb";
import { ResponseFuncs } from "../../../util/models/types";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";


export default async function handleGetEPutPorUsuario(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const session = await getServerSession(req, res, authOptions);
  const {
    query: { idUsuario },
  } = req;

  const { CV } = await connectToDatabase();
  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { CV } = await connectToDatabase();
      const resp = await CV.findOne({ id_usuario: { $eq: idUsuario } }).catch(
        catcher
      );
      res.json(JSON.parse(JSON.stringify(resp)));
    },
    // RESPONSE POST REQUESTS
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      const { CV } = await connectToDatabase();
      const cv = await CV.findById(idUsuario).catch(catcher);
      if (!session || session.user?.email !== cv.id_usuario) {
        res.status(403).json({ error: "Acesso negado" });
      } else {
        const resp = await CV.findByIdAndUpdate(idUsuario , req.body).catch(
          catcher
        );
        res.json(resp);
      }
    },
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      const { CV } = await connectToDatabase();
      const cv = await CV.findById(idUsuario).catch(catcher);
      if (!session || session.user?.email !== cv.id_usuario) {
        res.status(403).json({ error: "Acesso negado" });
      } else {
        const resp = await CV.findByIdAndDelete(idUsuario).catch(catcher);
        res.json(resp);
      }
    }
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
