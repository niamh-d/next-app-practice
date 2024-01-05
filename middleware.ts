import { NextRequest, NextResponse } from "next/server";

export default function middlewear(request: NextRequest) {
  return NextResponse.redirect(new URL("/new-page", request.url));
}

export const config = {
  // *: zero or more parameters e.g. matcher: ["/users/:id*"]
  // +: one or more
  // ?: zero or one

  matcher: ["/users/:id*"],
};
