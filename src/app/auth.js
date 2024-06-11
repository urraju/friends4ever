import NextAuth, { CredentialsSignin } from "next-auth";
import google from "next-auth/providers/google";
import credential from "next-auth/providers/credentials";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    credential({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "password", type: "password" },
      },
      authorize: ({ email, password }) => {
        console.log(email, password);

        if(typeof email !== 'string')
            throw new CredentialsSignin('Email is not valid')
        const user = {email, id:'asdf'};
        if (password === "passcode")
          throw new CredentialsSignin("Password does not match");
        else return user;
      },
    }),
  ],
});
