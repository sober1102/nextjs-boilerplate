"use server";

import { cookies } from "next/headers";

async function getUserFromSession() {
  const session = cookies().get("session");

  if (!session) return null;

  if (session.value === process.env.ADMIN_SESSION_ID) {
    return { role: "admin" };
  }

  return { role: "user" };
}

export async function getAdminSystemReport() {
  const user = await getUserFromSession();

  if (!user || user.role !== "admin") {
    return { error: "Unauthorized" };
  }

  return {
    success: true,
    report: process.env.FLAG_VALUE
  };
}

export async function publicAction() {
  return { message: "Public endpoint" };
}


