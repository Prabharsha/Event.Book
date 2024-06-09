import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:[
        '/',
        '/event:id',
        '/api/webhook/stripe',
        '/api/webhook/clerk',
        '/api/uploadthing'
    ],
    ignoredRoutes: [
        '/api/webhook/stripe',
        '/api/webhook/clerk',
        '/api/uploadthing'
    ],

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};