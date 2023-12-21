import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
  //Allow users to visit these routes even if they are not logged in
  publicRoutes: [
    "/",
    "events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing"
  ],
  ignoredRoutes:[
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing"
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 