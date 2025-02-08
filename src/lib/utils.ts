import { auth } from "@clerk/nextjs/server";

const { userId, sessionClaims } = await auth();
export const role = (sessionClaims?.metadata as { role?: string })?.role;
export const currentUserId = userId;

// import { auth } from "@clerk/nextjs/server";

// export const role = async () => {
//   const { sessionClaims } = await auth();
//   return (sessionClaims?.metadata as { role?: string })?.role;
// };

// import { auth } from "@clerk/nextjs/server";

// export const rolePromise = auth().then(
//   ({ sessionClaims }) => (sessionClaims?.metadata as { role?: string })?.role
// );
