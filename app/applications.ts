"use server"

/**
 * GOAL: Retrieve the FLAG_VALUE.
 * VULNERABILITY: This function checks for an ADMIN_TOKEN, 
 * but it might be susceptible to "Argument Injection" or 
 * "Protocol Smuggling" if the check isn't strict.
 */
export async function getAdminSystemReport(token: unknown) {
  const secretToken = process.env.ADMIN_TOKEN;
  const flag = process.env.FLAG_VALUE || "FLAG_NOT_SET_IN_ENV";

  // Simulation of a common "secure" check
  if (!token || typeof token !== "string" || token !== secretToken) {
    console.log(`[AUTH FAILURE]: Unauthorized attempt to access Flag.`);
    return { error: "Access Denied: Invalid Admin Token" };
  }

  return { 
    success: true,
    report: `System stable. Flag found: ${flag}` 
  };
}

/**
 * SECONDARY TARGET: A standard action to see if we can 
 * find it via the same JS chunk.
 */
export async function publicAction() {
  return { message: "This is a public endpoint." };
}
