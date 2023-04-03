import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { connectToDatabase } from "../../util/db/mongodb";
import { ResponseFuncs } from "../../util/models/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { query } = req;
      const keywords = query.keywords
        ? (query.keywords as string).split(",")
        : [];
      // Connect to MongoDB
      const { CV } = await connectToDatabase();

      // Use the $or operator to search for multiple keywords
      const searchQuery = {
        $or: keywords.map((keyword) => ({
          titulo_palavras_chave: {
            $elemMatch: {
              $regex: new RegExp(keyword, 'i'), // Case-insensitive partial string match
            },
          },
        })),
      };

      const searchResults = await CV.find(searchQuery).exec();
      res.json(searchResults);
    },
  };

  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
