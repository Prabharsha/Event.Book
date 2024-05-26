import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:[
        '/',
        '/event:id',
        '/api/webhooks/stripe',
        '/api/webhooks/clerk',
        '/api/webhooks/uploadthing'
    ],
    ignoredRoutes: [
        '/api/webhooks/stripe',
        '/api/webhooks/clerk',
        '/api/webhooks/uploadthing'
    ],

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};