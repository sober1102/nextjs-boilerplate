// app/page.tsx

// This MUST be exported to be a valid Server Action module
export async function mySecretAction() {
  'use server';
  
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!secretKey) {
    // Log this on the server for your eyes only
    console.error("Missing STRIPE_SECRET_KEY");
    // Return a generic error to the client
    return { error: "Internal Server Error" };
  }

  // Logic using the key happens here...
  
  return { success: true, message: "Action secured." };
}

// Ensure you also have a default export for the page itself
export default function Page() {
  return (
    <main>
      <h1>Security Lab</h1>
      <p>Target Version: 16.1.6</p>
    </main>
  );
}
