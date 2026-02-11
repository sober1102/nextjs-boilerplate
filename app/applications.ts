"use server"

import { cookies } from "next/headers";

async function getUserFromSession() {
  const session = cookies().get("session");

  if (!session) return null;

  // simulate session verification
  if (session.value === process.env.ADMIN_SESSION_ID) {
    return { role: "admin" };
  }

  return { role: "user" };
}

export async function getAdminSystemReport() {
  const user = await getUserFromSession();

  if (!user || user.role !== "admin") {
    console.log("[AUTH FAILURE]: Unauthorized attempt");
    return { error: "Unauthorized" };
  }

  return {
    success: true,
    report: process.env.FLAG_VALUE
  };
}

