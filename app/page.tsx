export default function Home() {
  const MOCK_API_KEY = "sk_test_51MzSobertoolsSecretKey_2026";

  // We add (formData: any) to satisfy the form requirement
  // and we cast the function to (any) in the JSX below
  async function mySecretAction(formData: any) {
    'use server';
    console.log("SERVER: Executing privileged action...");
    return { 
      message: "Action successful", 
      leaked_data: MOCK_API_KEY 
    } as any; 
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bug Bounty Lab: Phase 2</h1>
      <p>TypeScript bypass active. Ready for extraction.</p>
      
      {/* (mySecretAction as any) kills the Type Error instantly */}
      <form action={mySecretAction as any}>
        <button type="submit" style={{ padding: '12px 24px', cursor: 'pointer' }}>
          Execute Server Action
        </button>
      </form>
    </main>
  );
}
