import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token + "aaaaaaaaaa");
    if (req.nextUrl.pathname.startsWith("/")) {
      return NextResponse.next();
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(token);
        return !!token;
      },
    },
  }
);

// export async function middleware(request) {
//   const token = await getToken({
//     req: request,
//     secret: process.env.NEXTAUTH_SECRET,
//   });
//   console.log(token.role);
//   console.log(request.url);
//   console.log(request.nextUrl.pathname.startsWith("/"));
//   return NextResponse.json({
//     message: "you are authenticated",
//   });
// }
export const config = { matcher: ["/home"] };

// export default withAuth(function middleware(request) {
//   console.log(request.url);
//   console.log(request.nextUrl.pathname.startsWith("/"));
//   return NextResponse.json({
//     message: "you are authenticated",
//   });
// }, {

// });

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/",
// };
