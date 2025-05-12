import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectionToDB } from "./db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: "Credentials",
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: {
					label: "Email",
					type: "text",
					placeholder: "email@gmail.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					throw new Error("Missing credentials");
				}
				try {
					await connectionToDB();
					const user = await User.findOne({
						email: credentials.email,
					});
					if (!user) {
						throw new Error("No user found");
					}

					const isValid = await bcrypt.compare(
						credentials.password,
						user.password
					);
					if (!isValid) {
						throw new Error("Wrong Password");
					}
					return {
						id: user._id.toString(),
						email: user.email,
					};
				} catch (error) {
					throw error;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id as string;
			}
			return session;
		},
	},
    pages:{
        signIn: "/login",
        error: "/login"
    },
	session: {
		strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
	},
    secret:process.env.NEXTAUTH_SECRET

};
