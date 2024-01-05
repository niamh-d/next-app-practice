// import middleware from "next-auth/middleware";
// export default middleware;

export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more parameters e.g. matcher: ["/users/:id*"]
  // +: one or more
  // ?: zero or one

  matcher: ["/users/:id*"],
};
