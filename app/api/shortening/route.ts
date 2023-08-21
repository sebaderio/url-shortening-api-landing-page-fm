import { NextResponse } from "next/server";

import { appConfig } from "@/config";
import { generateString, isValidHttpUrl } from "@/shared/utils";

export async function POST(req: Request): Promise<NextResponse> {
    const origin = req.headers.get("origin");
    let url = null;
    try {
        const body = await req.json();
        url = body.url;
    } catch {
        console.log("Invalid request body provided");
    }

    if (!isValidHttpUrl(url)) {
        return new NextResponse(
            JSON.stringify({
                error: `Invalid URL provided: ${url}`,
            }),
            {
                headers: {
                    "Access-Control-Allow-Origin": origin || "*",
                    "Content-Type": "application/json",
                },
            }
        );
    }

    const shortenedUrl = `https://${generateString(
        appConfig.shortening.length
    )}.it`;

    return new NextResponse(
        JSON.stringify({
            originalUrl: url,
            shortenedUrl: shortenedUrl,
        }),
        {
            headers: {
                "Access-Control-Allow-Origin": origin || "*",
                "Content-Type": "application/json",
            },
        }
    );
}
