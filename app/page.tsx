export default function Home() {
  // This is the secret we are going to try to exfiltrate
  const MOCK_API_KEY = "sk_test_51MzSobertoolsSecretKey_2026";

  // This is our "Vulnerable" Server Action
  async function mySecretAction() {
    'use server';
    console.log("SERVER: Executing privileged action...");
    return { 
      message: "Action successful", 
      leaked_data: MOCK_API_KEY 
    };
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bug Bounty Lab: Phase 2</h1>
      <p>The server holds a secret. Can you trigger the action to find it?</p>
      
      {/* In a Server Component, we can pass the action 
         directly to the form. Next.js handles the rest.
      */}
      <form action={mySecretAction}>
        <button type="submit" style={{ padding: '12px 24px', cursor: 'pointer' }}>
          Execute Server Action
        </button>
      </form>
    </main>
  );
}
