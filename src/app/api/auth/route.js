import { NextResponse } from "next/server";

// fake user (replace with DB check)
const USER = { email: "test@test.com", password: "123456" };

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === USER.email && password === USER.password) {
    const res = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    // set token cookie (httpOnly for security)
    res.cookies.set("token", "my-secret-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
