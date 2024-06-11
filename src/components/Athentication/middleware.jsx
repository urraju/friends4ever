import { NextResponse } from "next/server";

const middleware = (request) => {
    return NextResponse.redirect(new URL("/authentication", request.url))
}
export default middleware;
export const config = {
    matcher:"/class/:path*",
}