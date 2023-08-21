import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { appConfig } from "@/config";

// NOTE implemented based on this tutorial https://www.youtube.com/watch?v=h4-2K7nFf7s
export function middleware(request: NextRequest) {
    const origin = request.headers.get("origin");

    if (origin && !appConfig.cors.allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                "Content-Type": "text/plain",
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
