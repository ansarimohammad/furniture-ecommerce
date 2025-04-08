import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/about",
    "/contact",
    "/faq",
    "/products(.*)",
    "/collections(.*)",
    "/latest-products",
    "/trending",
    "/cart",
    "/checkout",
    "/order-success",
    "/api(.*)"
  ],
  
  afterAuth(auth, req) {
    // If the user is trying to access admin routes without admin role
    if (req.nextUrl.pathname.startsWith("/admin") && (!auth.userId || !auth.has?.role?.includes("admin"))) {
      // Either redirect them to sign-in or show a 403 error
      return auth.userId 
        ? NextResponse.rewrite(new URL("/unauthorized", req.url))
        : redirectToSignIn({ returnBackUrl: req.url });
    }

    // If the user is trying to access a protected route and they're not signed in
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 