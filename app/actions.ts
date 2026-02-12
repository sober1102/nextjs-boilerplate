"use server";

export async function getAdminSystemReport(token: unknown) {
  const secretToken = process.env.ADMIN_TOKEN;
  const flag = process.env.FLAG_VALUE || "FLAG_NOT_SET";

  if (!token || typeof token !== "string" || token !== secretToken) {
    console.log("[AUTH FAILURE]");
    return { error: "Access Denied" };
  }

  return {
    success: true,
    report: `System stable. Flag found: ${flag}`,
  };
}

export async function publicAction() {
  return { message: "Public endpoint working" };
}


