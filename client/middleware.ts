import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/" // Redirect to home or login page if not authenticated
  }
});

export const config = {
  matcher: ["/dashboard/:path*"] // Protect all dashboard routes
};
