import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { SessionOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const googleClientId: string = process.env.GOOGLE_CLIENT_ID ?? ''
const googleClientSecret: string = process.env.GOOGLE_CLIENT_SECRET ?? ''

const sessionOptions:SessionOptions = {
    strategy: "database",
    maxAge: 2592000,
    updateAge: 86400,
}

const options = {
  providers: [
      GoogleProvider({
        clientId: googleClientId,
        clientSecret: googleClientSecret,
      }),
    ],
    secret: process.env.JWT_SECRET,
}

export default (req: NextApiRequest, res: NextApiResponse<any>) => NextAuth(req, res, options)