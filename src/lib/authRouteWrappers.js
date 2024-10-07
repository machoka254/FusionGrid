import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { NextResponse } from "next/server";

export function withAuthGeneral(handler) {
  return async function (req, res) {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      //NO SESSION/USER
      // Determine the protocol
      const protocol = req.headers.get("x-forwarded-proto") || "http";
      // Determine the host
      const host = req.headers.get("host");
      // Construct the base URL
      const baseUrl = `${protocol}://${host}`;
      // Construct the home URL
      const homeUrl = new URL("/", baseUrl);
      return Response.json("Unauthorized", { status: 401 });
    }

    return handler(req, session.user);
  };
}

export function withAuthAdmin(handler) {
  return async function (req, res) {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      //NO SESSION/USER
      // Determine the protocol
      const protocol = req.headers.get("x-forwarded-proto") || "http";
      // Determine the host
      const host = req.headers.get("host");
      // Construct the base URL
      const baseUrl = `${protocol}://${host}`;
      // Construct the home URL
      const homeUrl = new URL("/", baseUrl);
      return Response.json("Unauthorized", { status: 401 });
    }

    if (session.user.role.includes !== "ADMIN") {
      // return NextResponse.json("You do not have necessary permissions", {
      //   status: 403,
      // });
      //NO SESSION/USER
      // Determine the protocol
      const protocol = req.headers.get("x-forwarded-proto") || "http";
      // Determine the host
      const host = req.headers.get("host");
      // Construct the base URL
      const baseUrl = `${protocol}://${host}`;
      // Construct the home URL
      const homeUrl = new URL("/", baseUrl);
      console.log("URL redirect: ", homeUrl.toString());
      return Response.json("Forbidden", { status: 403 });
    }

    return handler(req, session.user);
  };
}
