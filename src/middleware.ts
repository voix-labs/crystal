import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { updateSession } from "./config/supabase/middleware";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { res } = await updateSession(req);
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO)
     * - sitemap.xml (SEO)
     * - site.webmanifest (SEO)
     * - monitoring (analytics)
     * Excludes files with the following extensions for static assets:
     * - svg
     * - png
     * - jpg
     * - jpeg
     * - pdf
     * - gif
     * - webp
     */

    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|site.webmanifest|monitoring|.*\\.(?:svg|png|jpg|jpeg|pdf|gif|webp)$).*)",
  ],
};
