import NextAuth, { NextAuthOptions, SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleClientId: string = process.env.GOOGLE_CLIENT_ID ?? "";
const googleClientSecret: string = process.env.GOOGLE_CLIENT_SECRET ?? "";

const jwtSecret = process.env.JWT_SECRET;

const sessionStrategy : SessionStrategy = "jwt";

export const authOptions:NextAuthOptions ={
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  session: {
    strategy: sessionStrategy
  },
  jwt: {
    secret: jwtSecret,
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
}

export default NextAuth(authOptions);
