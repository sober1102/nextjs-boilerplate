"use server"

// THE FLAG FILE
export async function downloadSecureReport(passcode: string) {
  // A simple, "vulnerable" logic check for us to bypass
  if (passcode === "ADMIN_SECRET_123") {
    return { data: "FLAG{SERVER_ACTION_BROKEN_AUTH_2026}" };
  }
  return { error: "Access Denied" };
}
