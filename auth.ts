import { User } from "@/lib/models";
import { connectToDB } from "@/lib/services";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn(params): Promise<boolean> {
      const { user, account, profile } = params;
      console.log("login params", user, account, profile);
      if (account?.provider === "github") {
        connectToDB();
        try {
          const user = await User.findOne({ email: profile?.email });
          console.log("user", user);
          
          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          throw new Error("Error in signIn callback");
          return false;
        }
      }
      return true;
    },
  },
});
