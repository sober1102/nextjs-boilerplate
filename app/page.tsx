export default function Home() {
  // This is a "Secret" that should never be sent to the browser
  const MOCK_API_KEY = "sk_test_51MzSobertoolsSecretKey_2026";

  async function mySecretAction(formData: FormData) {
    'use server';
    console.log("Action triggered!");
    // VULNERABILITY: Returning sensitive data in a server action
    return { 
      status: "success", 
      exposed_secret: MOCK_API_KEY 
    };
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bug Bounty Lab: Phase 2</h1>
      <p>Target ID: <b>4068cd6...</b></p>
      
      <form action={mySecretAction}>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Trigger Secret Action
        </button>
      </form>
    </main>
  );
}
