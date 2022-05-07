import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { Session, SessionOptions, User } from "next-auth";
import Providers from "next-auth/providers";
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
      clientId: googleClientSecret,
      clientSecret: googleClientSecret,
    }),
  ],
  secret: process.env.JWT_SECRET, 
  database: process.env.MONGODB_URI,
  session: sessionOptions,
  debug: true,
  
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;