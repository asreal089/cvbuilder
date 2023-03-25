import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const googleClientId: string = process.env.GOOGLE_CLIENT_ID ?? ''
const googleClientSecret: string = process.env.GOOGLE_CLIENT_SECRET ?? ''

const jwtSecret = process.env.JWT_SECRET;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: jwtSecret
}});