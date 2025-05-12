import { NextRequest, NextResponse } from "next/server";
import { connectionToDB } from "@/lib/db";
import User from "@/models/user.model";

export async function POST(request: NextRequest) {
	try {
		const { email, password } = await request.json();
		if (!email || !password) {
			return NextResponse.json(
				{ error: "Email or password are required" },
				{ status: 400 }
			);
		}

		await connectionToDB();

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ error: "Email already exist" },
				{ status: 400 }
			);
		}
		await User.create({
			email,
			password,
		});
		return NextResponse.json(
			{ message: "User registered successfully" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to register user" },
			{ status: 500 }
		);
	}
}
